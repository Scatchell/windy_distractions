DeathMachineUser = function(location, container){
  this.location = location;
  this.speed = 6;
  this.container = container;
  this.path = [new MoveAction(new Point(container.max_x-50, 0), this.speed),
               new ShootAction(),
               new MoveAction(new Point(container.max_x/2, container.max_y/2), this.speed),
               new ShootAction(),
               new MoveAction(new Point(container.max_x/2, container.max_y+50), this.speed)];
  this.current_action = this.path[0];

  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.sprite.src = "assets/sprites/death_machine_user.png";
  this.sprite.height = 50;
  this.sprite.width = 50;
}

DeathMachineUser.prototype = new Renderable();

DeathMachineUser.prototype.outOfBounds = function(overflows) {
  if (overflows.bottom > this.height()) {
    game.deregister(this);
  }
}

DeathMachineUser.prototype.tick = function() {
  if (this.current_action.perform(this)){
    this.current_action = this.path.shift() || this.current_action;
  }
}

DeathMachineUser.prototype.shootBullet = function() {
  var bullet = new Bullet(this.location.down_by(this.height()+10), this.container);
  bullet.speed = -10;
  game.register(bullet);
}

DeathMachineUser.prototype.move = function(new_location) {
  this.location = new_location;
  this.container.checkBoundaries(this);
}
