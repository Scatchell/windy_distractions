MoveAction = function(target) {
  this.target = target; 
  this.speed = 6;
}

MoveAction.prototype.perform = function(DMU) {
  var next_location = this.calcDestination(DMU.location);

  DMU.move(next_location);

  return this.distance_between_two_points(next_location, this.target) < this.speed;
}

MoveAction.prototype.calcDestination = function(current_location) {
  var scaler = this.obtain_scalar(current_location, this.target);
  var x_distance = scaler * (this.target.x - current_location.x);
  current_location = current_location.right_by(x_distance);
  var y_distance = scaler * (this.target.y - current_location.y);
  return current_location.down_by(y_distance);
}

MoveAction.prototype.obtain_scalar = function(current_location, target) {
  return this.speed / (this.distance_between_two_points(current_location, target));
}

MoveAction.prototype.distance_between_two_points = function(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

