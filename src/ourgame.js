function init() {
	var guy = new Guy();
	guy.render();
	$(document).keydown(function(event){
		if (event.which == 39){
			guy.move(1, 0);	
			guy.render();
		}		
	});
}

Guy = function() {
	this.x = 0;
	this.y = 0;
	this.speed = 10;

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

Guy.prototype.move = function(x, y) {
	this.x += x * this.speed;
	this.y += y * this.speed;
}

