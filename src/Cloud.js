Cloud = function(location, container) {
  this.location = location; 
  this.container = container;
  this.speed = 3.5;

  this.spriteLocation = "assets/sprites/cloud.png";
  this.height = 300;
  this.width = 300;

  Renderable.apply(this);
  this.sprite.style.zIndex = 1; 
}

Cloud.prototype = new Renderable();

Cloud.prototype.move = function() {
  this.location = this.location.down_by(this.speed);

  this.container.checkBoundaries(this);
}
