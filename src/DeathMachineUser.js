DeathMachineUser = function(location, container){
  this.location = location;
  this.speed = 10;
  this.container = container;
  this.path = [new Point(window.innerWidth, 0), new Point(window.innerWidth/2, window.innerHeight/2), new Point(window.innerWidth/2, window.innerHeight)];
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
    this.location.x += scaler * (this.target.x - this.location.x);
    this.location.y += scaler * (this.target.y - this.location.y);
  } else {
    this.target = this.path.shift() || this.target;
  }
}

DeathMachineUser.prototype.obtain_scalar = function(current_location, target) {
  return this.speed / (this.distance_between_two_points(current_location, target));
}

DeathMachineUser.prototype.distance_between_two_points = function(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}
