Guy = function(location, container) {
	this.location = location;
	this.speed = 8;

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
	var bullet = new Bullet(this.location, this.container);
	game.register(bullet);
}

Guy.prototype.outOfBounds = function(overflows) {
  this.location = this.location.right_by(overflows.left);
  this.location = this.location.left_by(overflows.right);
  this.location = this.location.down_by(overflows.top);
  this.location = this.location.up_by(overflows.bottom);
}
