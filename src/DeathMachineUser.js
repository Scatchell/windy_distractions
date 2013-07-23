DeathMachineUser = function(location, container){
  Renderable.apply(this);
  this.health = 1;
  this.damage = 1;
  this.location = location;
  this.speed = 6;
  this.shootSpeed = -10;
  this.container = container;
  this.path = [
              new MoveAction(new Point(container.max_x/4-50, 0), this.speed),
              new ShootAction(this.shootSpeed),
              new MoveAction(new Point(container.max_x/2-50, 0), this.speed),
              new ShootAction(this.shootSpeed),
              new WaitAction(10),
              new ShootAction(this.shootSpeed),
              new MoveAction(new Point(container.max_x/1.5-50, 0), this.speed),
              new ShootAction(this.shootSpeed),
              new MoveAction(new Point(container.max_x-50, 0), this.speed),
              new ShootAction(this.shootSpeed),
              new MoveAction(new Point(container.max_x/2, container.max_y/2), this.speed),
              new ShootAction(this.shootSpeed),
              new MoveAction(new Point(container.max_x/2, container.max_y+50), this.speed)];
  this.current_action = this.path[0];

  this.spriteLocation = "assets/sprites/death_machine_user.png";
  this.height = 50;
  this.width = 50;
  
  this.entrySound = new Audio("assets/sounds/death_machine_user_enters.ogg");
  this.entrySound.play();
}

DeathMachineUser.prototype = new Renderable();

DeathMachineUser.prototype.outOfBounds = function(overflows) {
  if (overflows.bottom > this.height) {
    var winSound = new Audio("assets/sounds/you_idiot.ogg");
    winSound.play();
    this.die();

    windyPipeline.publish("out_of_bounds");
  }
}

DeathMachineUser.prototype.tick = function() {
  if (this.current_action.perform(this)){
    this.current_action = this.path.shift() || this.current_action;
  }
}

DeathMachineUser.prototype.shootBullet = function(shoot) {
  var bullet = new Bullet(this.location.down_by(this.height+10), this.container);
  shoot(bullet);
}

DeathMachineUser.prototype.move = function(new_location) {
  this.location = new_location;
  this.container.checkBoundaries(this);
}

DeathMachineUser.prototype.collided_with = function(other) {
  this.decreaseHealth(other.damage);
}

DeathMachineUser.prototype.prepareToDie = function() {
  this.entrySound.pause();
  var sound = new Audio("assets/sounds/no_you_have_defeated_me.ogg");
  sound.play();
}

DeathMachineUser.prototype.decreaseHealth = function(damage) {
  if (damage > 0) {
    this.health -= damage;
    if (this.health <= 0) {
      this.die();
    }
  }
}

