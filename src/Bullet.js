Bullet = function(properties) {
  Renderable.apply(this);
  this.location = properties.location; 
  this.container = properties.container;
  this.speed = 10;
  this.health = 1;
  this.damage = 1;
  this.isNice = properties.isNice
  this.isBad = properties.isBad

  this.spriteLocation = "assets/sprites/bullet.png";
  this.height = 10;
  this.width = 5;
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
  this.decreaseHealth(other.damage);
}

Bullet.prototype.decreaseHealth = function(damage) {
  this.health -= damage;
  if (this.health <= 0) {
    this.die();
  }
}
