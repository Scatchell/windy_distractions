Container = function(min_x, min_y, max_x, max_y) {
  this.max_x = max_x;
  this.max_y = max_y;
  this.min_x = min_x;
  this.min_y = min_y;
}

Container.prototype.checkBoundaries = function(object) {
  var overflows = {};

  overflows.left = Math.max(0, this.min_x - object.left());
  overflows.right = Math.max(0, object.right() - this.max_x);
  overflows.top = Math.max(0, this.min_y - object.top());
  overflows.bottom = Math.max(0, object.bottom() - this.max_y);

  if (sumOfValues(overflows)) {
    object.outOfBounds(overflows);
  }
}

Container.prototype.width = function() {
  return this.max_x - this.min_x;
}


function sumOfValues(object) {
  var sum = 0;
  for (var key in object) {
    sum += object[key];
  }
  return sum;
}

