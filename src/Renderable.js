Renderable = function () {
  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.damage = 0;
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

Renderable.prototype.render = function() {
  this.sprite.style.left = this.location.x + "px";
  this.sprite.style.top = this.location.y + "px";
  this.sprite.src = this.spriteLocation;
  this.sprite.height = this.height;
  this.sprite.width = this.width;

  $("#gameplayArea").append(this.sprite);
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
  this.die();
}

Renderable.prototype.collided_with = function(other) {
  ;
}

Renderable.prototype.explode = function() {
  var self = this;
  var callback = function() { $(self.sprite).remove();};
  $(this.sprite).hide("explode", {pieces: 50}, 700, callback);
}

Renderable.prototype.remove = function() {
  $(this.sprite).remove();
}

Renderable.prototype.die = function() {
  this.prepareToDie();
  this.remove();
  game.deregister(this);
}

Renderable.prototype.prepareToDie = function() {
  ;
}
