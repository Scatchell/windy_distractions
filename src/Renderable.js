Renderable = function () {
}

Renderable.prototype.top = function() {
  return this.location.y;
}

Renderable.prototype.bottom = function() {
  return this.location.y + this.sprite.height;
}

Renderable.prototype.left = function() {
  return this.location.x;
}

Renderable.prototype.right = function() {
  return this.location.x + this.sprite.width;
}

Renderable.prototype.height = function() {
  return this.sprite.height;
}

Renderable.prototype.width = function() {
  return this.sprite.width;
}

Renderable.prototype.render = function() {
  this.sprite.style.left = this.location.x + "px";
  this.sprite.style.top = this.location.y + "px";
  $("#container").append(this.sprite);
}

Renderable.prototype.remove = function() {
  $(this.sprite).remove();
}

Renderable.prototype.move = function() {
  ;
}

Renderable.prototype.tick = function() {
  this.move();
}

Renderable.prototype.collided = function(other) {
  return !(this.bottom() < other.top() || other.bottom() < this.top() ||
            this.right() < other.left() || other.right() < this.left());
}

Renderable.prototype.outOfBounds = function(overflows) {
  game.deregister(this);
}

Renderable.prototype.collided_with = function(other) {
  game.deregister(this);
}
