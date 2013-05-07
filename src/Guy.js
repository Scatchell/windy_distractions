Guy = function(location, container) {
	this.location = location;
	this.speed = 10;

	this.sprite = document.createElement("img");
	this.sprite.style.position = "absolute";
	this.sprite.src = "assets/sprites/guy.png";
        this.sprite.height = 50;
        this.sprite.width = 25;
	
	this.container = container;
}

Guy.prototype = new Renderable();

Guy.prototype.move = function(x, y) {
	this.location.x += x * this.speed;
	this.location.y += y * this.speed;

	this.container.checkBoundaries(this);
}

Guy.prototype.shootBullet = function() {
	var bullet = new Bullet(this.location, this.container);
	game.register(bullet);
}

Guy.prototype.outOfBounds = function(overflows) {
  this.location.x += overflows.left;
  this.location.x -= overflows.right;
  this.location.y += overflows.top;
  this.location.y -= overflows.bottom;
}
