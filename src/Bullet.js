Bullet = function(location, container) {
  this.location = location; 
  this.container = container;
  this.speed = 10;

  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.sprite.src = "assets/sprites/bullet.png";
  this.sprite.height = 10;
  this.sprite.width = 5;
}

Bullet.prototype = new Renderable();

Bullet.prototype.move = function() {
  this.location = this.location.up_by(this.speed);

  this.container.checkBoundaries(this);
}

Bullet.prototype.collided_with = function(other) {
  if (other instanceof Bullet) {
    var sound = new Audio("assets/sounds/bullet_collision.ogg");
    sound.play();
  }
  Renderable.prototype.collided_with.apply(this, other);
}
