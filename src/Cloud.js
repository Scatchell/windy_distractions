Cloud = function(location, container) {
  this.location = location; 
  this.container = container;
  this.speed = 3.5;

  this.spriteLocation = "assets/sprites/cloud.png";
  this.height = 211;
  this.width = 268;

  Renderable.apply(this);
  this.sprite.style.zIndex = 1; 
}

Cloud.prototype = new Renderable();

Cloud.prototype.move = function() {
  this.location = this.location.down_by(this.speed);

  this.container.checkBoundaries(this);
}

Cloud.prototype.outOfBounds = function(overflows) {
  if (overflows.bottom > this.height) {
    this.die();
  }
}
