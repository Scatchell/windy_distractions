Bullet = function(location, container) {
  this.location = jQuery.extend({}, location);
  this.container = container;

  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.sprite.src = "assets/sprites/bullet.png";
  this.sprite.height = 10;
  this.sprite.width = 5;
}

Bullet.prototype = new Renderable();

Bullet.prototype.move = function() {
  this.location.y -= 10;
  this.container.checkBoundaries(this);
}
