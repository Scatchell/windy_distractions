Bullet = function(location, container) {
  this.location = location; 
  this.container = container;
  this.speed = 10;

  this.spriteLocation = "assets/sprites/bullet.png";
  this.height = 10;
  this.width = 5;

  Renderable.apply(this);
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
