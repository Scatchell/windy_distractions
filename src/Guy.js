Guy = function(container) {
	this.x = 0;
	this.y = 0;
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
	this.x += x * this.speed;
	this.y += y * this.speed;

	if (this.x < 0){
		this.x = 0;
	} else if (this.y < 0) {
		this.y = 0;
	}

	this.container.restrict(this);
}

Guy.prototype.shootBullet = function() {
	var bullet = new Bullet(this.x, this.y);
	game.register(bullet);
}
