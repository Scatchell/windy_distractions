Point = function(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.down_by = function(amount){
  return new Point(this.x, this.y + amount);
}

Point.prototype.up_by = function(amount){
  return new Point(this.x, this.y - amount);
}

Point.prototype.left_by = function(amount){
  return new Point(this.x - amount, this.y);
}

Point.prototype.right_by = function(amount){
  return new Point(this.x + amount, this.y);
}
