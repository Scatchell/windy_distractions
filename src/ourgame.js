function init() {
	var theGame = new Game();
	theGame.tick();
}

Game = function() {
	this.guy = new Guy();
	this.rightDown = false;
	this.downDown = false;
	this.guy.render();
	var self = this;
	$(document).keydown(function(event){
		if (event.which == 39){
			self.rightDown = true;
		}
		if (event.which == 40){
			self.downDown = true;
		}	
	});
	$(document).keyup(function(event){
		if (event.which == 39){
			self.rightDown = false;
		}
		if (event.which == 40){
			self.downDown = false;
		}	
	});
}

Game.prototype.tick = function() {
	var self = this;
	this.guy.move(this.rightDown? 1 : 0, this.downDown? 1 : 0);
	this.guy.render();
	setTimeout(function() { self.tick(); }, 100);
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
	this.sprite.style.top = this.y + "px";
	container.appendChild(this.sprite);
}

Guy.prototype.move = function(x, y) {
	this.x += x * this.speed;
	this.y += y * this.speed;
}

