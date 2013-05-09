Guy = function(location, container) {
  this.location = location;
  this.speed = 8;
  this.bullet_cooldown = 20;
  this.ticks_since_shot = 0;

  this.sprite = document.createElement("img");
  this.sprite.style.position = "absolute";
  this.sprite.src = "assets/sprites/guy.png";
  this.sprite.height = 50;
  this.sprite.width = 25;

  this.container = container;
}

Guy.prototype = new Renderable();

Guy.prototype.move = function(x, y) {
  this.location = this.location.right_by(x * this.speed);
  this.location = this.location.down_by(y * this.speed);

  this.container.checkBoundaries(this);
}

Guy.prototype.shootBullet = function() {
  var bullet = new Bullet(this.location.up_by(11), this.container);
  game.register(bullet);
}

Guy.prototype.outOfBounds = function(overflows) {
  this.location = this.location.right_by(overflows.left);
  this.location = this.location.left_by(overflows.right);
  this.location = this.location.down_by(overflows.top);
  this.location = this.location.up_by(overflows.bottom);
}

Guy.prototype.tick = function() {
  this.move(game.rightDown? 1 : 0, game.downDown? 1 : 0);
  this.move(game.leftDown? -1 : 0, game.upDown? -1 : 0);

  if (game.LDown && this.ticks_since_shot > this.bullet_cooldown) {
    this.shootBullet();
    this.ticks_since_shot = 0;
  }
  this.ticks_since_shot++;
}
