function init() {
	var guy = new Guy();
	guy.moveRight();	
	guy.render();
}

Guy = function() {
	this.x = 0;
	this.y = 0;

	this.sprite = document.createElement("img");
	this.sprite.style.position = "absolute";
	this.sprite.src = "assets/sprites/guy.png";
        this.sprite.height=50;
        this.sprite.width=25;
}

Guy.prototype.render = function() {
	var container = document.getElementById("container");
	this.sprite.style.left = this.x + "px";
	container.appendChild(this.sprite);
}

Guy.prototype.moveRight = function() {
	this.x += 100;
}
