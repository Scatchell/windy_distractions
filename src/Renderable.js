Renderable = function () {
}

Renderable.prototype.top = function() {
  return this.y;
}

Renderable.prototype.bottom = function() {
  return this.y + this.sprite.height;
}

Renderable.prototype.left = function() {
  return this.x;
}

Renderable.prototype.right = function() {
  return this.x + this.sprite.width;
}

Renderable.prototype.render = function() {
  this.sprite.style.left = this.x + "px";
  this.sprite.style.top = this.y + "px";
  $("#container").append(this.sprite);
}

Renderable.prototype.remove = function() {
  $(this.sprite).remove();
}

Renderable.prototype.move = function() {
  ;
}

Renderable.prototype.collided = function(other) {
  return !(this.bottom() < other.top() || other.bottom() < this.top() ||
            this.right() < other.left() || other.right() < this.left());
}
