DeathMachineUser = function(x, y, container){
  this.x = x;
  this.y = y;
  this.speed = 10;
  this.container = container;
  this.path = [[window.innerWidth, 0], [window.innerWidth/2, window.innerHieght/2], [window.innerWidth/2, window.innerHeight]];
  this.target = [this.x, this.y];

  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.sprite.src = "assets/sprites/death_machine_user.png";
  this.sprite.height = 50;
  this.sprite.width = 50;
}

DeathMachineUser.prototype = new Renderable();

DeathMachineUser.prototype.move = function() {

  if (this.distance_between_two_points([this.x,this.y], this.target) > this.speed){
    var scaler = this.obtain_scalar([this.x,this.y], this.target);
    this.x += scaler * (this.target[0] - this.x);
    this.y += scaler * (this.target[1] - this.y);
  } else {
    this.target = this.path.shift() || this.target;
  }
}

//todo Refactor into point object

DeathMachineUser.prototype.obtain_scalar = function(current_location, target) {
  return this.speed / (this.distance_between_two_points(current_location, target));
}

DeathMachineUser.prototype.distance_between_two_points = function(point1, point2) {
  return Math.sqrt(Math.pow(point2[0] - point1[0],2) + Math.pow(point2[1] - point1[1], 2));
}
