DeathMachineUser = function(location, container){
  this.location = location;
  this.speed = 6;
  this.container = container;
  this.path = [new Point(container.max_x-50, 0), new Point(container.max_x/2, container.max_y/2), new Point(container.max_x/2, container.max_y+50)];
  this.target = location;

  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.sprite.src = "assets/sprites/death_machine_user.png";
  this.sprite.height = 50;
  this.sprite.width = 50;
}

DeathMachineUser.prototype = new Renderable();

DeathMachineUser.prototype.move = function() {
  if (this.distance_between_two_points(this.location, this.target) > this.speed){
    var scaler = this.obtain_scalar(this.location, this.target);
    var x_distance = scaler * (this.target.x - this.location.x);
    this.location = this.location.right_by(x_distance);
    var y_distance = scaler * (this.target.y - this.location.y);
    this.location = this.location.down_by(y_distance);
  } else {
    this.target = this.path.shift() || this.target;
    this.shootBullet();
  }
  this.container.checkBoundaries(this);
}

DeathMachineUser.prototype.obtain_scalar = function(current_location, target) {
  return this.speed / (this.distance_between_two_points(current_location, target));
}

DeathMachineUser.prototype.distance_between_two_points = function(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

DeathMachineUser.prototype.outOfBounds = function(overflows) {
  if (overflows.bottom > this.height()) {
    game.deregister(this);
  }
}

DeathMachineUser.prototype.shootBullet = function() {
  var bullet = new Bullet(this.location.down_by(this.height()+10), this.container);
  bullet.speed = -10;
  game.register(bullet);
}
