Guy = function(location, container) {
  Renderable.apply(this);
  this.health = 4;
  this.damage = 1;
  this.location = location;
  this.speed = 8;
  this.bullet_cooldown = 20;
  this.ticks_since_shot = 0;
  this.isNice = true;
  this.isBad = false;

  this.spriteLocation = "assets/sprites/guy.png";
  this.height = 50;
  this.width = 25;

  this.container = container;

  self = this;
  windyPipeline.subscribe("out_of_bounds", function(){
    self.decreaseHealth(1);
  });
}

Guy.prototype = new Renderable();

Guy.prototype.move = function(x, y) {
  this.location = this.location.right_by(x * this.speed);
  this.location = this.location.down_by(y * this.speed);

  this.container.checkBoundaries(this);
}

Guy.prototype.shootBullet = function(shoot) {
  var bullet = new Bullet({
    location: this.location.up_by(11),
    container: this.container,
    isNice: this.isNice,
    isBad: this.isBad
  });
  shoot(bullet);
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
    new ShootAction(10).perform(this);
    this.ticks_since_shot = 0;
  }
  this.ticks_since_shot++;
}

Guy.prototype.collided_with = function(other) {
  this.decreaseHealth(other.damage);
}

Guy.prototype.decreaseHealth = function(damage) {
  if (damage > 0) {
    var sound = new Audio("assets/sounds/oh_come_on.ogg");
    sound.play();
  }
  this.health -= damage;
  if (this.health <= 0) {
    this.die();
  }
}

Guy.prototype.prepareToDie = function() {
  this.explode();
}
