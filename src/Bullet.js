Bullet = function(x, y){
	this.x = x;
	this.y = y;
	
	this.sprite = document.createElement("img");
	this.sprite.style.position = "absolute";
	this.sprite.src = "assets/sprites/bullet.png";
        this.sprite.height = 10;
        this.sprite.width = 5;
	
}

Bullet.prototype = new Renderable();

Bullet.prototype.move = function() {
	this.y -= 10;
}
