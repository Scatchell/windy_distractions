DeathMachineUser = function(location, container){
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

  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.sprite.src = "assets/sprites/death_machine_user.png";
  this.sprite.height = 50;
  this.sprite.width = 50;
  
  this.entrySound = new Audio("assets/sounds/death_machine_user_enters.ogg");
  this.entrySound.play();
}

DeathMachineUser.prototype = new Renderable();

DeathMachineUser.prototype.outOfBounds = function(overflows) {
  if (overflows.bottom > this.height()) {
    game.deregister(this);
    var winSound = new Audio("assets/sounds/you_idiot.ogg");
    winSound.play();
  }
}

DeathMachineUser.prototype.tick = function() {
  if (this.current_action.perform(this)){
    this.current_action = this.path.shift() || this.current_action;
  }
}

DeathMachineUser.prototype.shootBullet = function(shoot) {
  var bullet = new Bullet(this.location.down_by(this.height()+10), this.container);
  shoot(bullet);
}

DeathMachineUser.prototype.move = function(new_location) {
  this.location = new_location;
  this.container.checkBoundaries(this);
}

DeathMachineUser.prototype.collided_with = function(other) {
  this.entrySound.pause();
  var sound = new Audio("assets/sounds/no_you_have_defeated_me.ogg");
  sound.play();
  Renderable.prototype.collided_with.apply(this, other);
}
