function init() {
	var theGame = new Game();
	theGame.tick();
}

Game = function() {
	var container = new Container(0,0,window.innerWidth,window.innerHeight);

	this.guy = new Guy(container);
	this.upDown = false;
	this.downDown = false;
	this.leftDown = false;
	this.rightDown = false;

	this.setKeyEvents();
	this.guy.render();
}

Game.prototype.setKeyEvents = function() {
	var self = this;

	$(document).keydown(function(event){
		if (event.which == 39){
			self.rightDown = true;
		}
		if (event.which == 40){
			self.downDown = true;
		}	
		if (event.which == 37){
			self.leftDown = true;
		}
		if (event.which == 38){
			self.upDown = true;
		}
	});

	$(document).keyup(function(event){
		if (event.which == 39){
			self.rightDown = false;
		}
		if (event.which == 40){
			self.downDown = false;
		}	
		if (event.which == 37){
			self.leftDown = false;
		}
		if (event.which == 38){
			self.upDown = false;
		}
	});
}

Game.prototype.tick = function() {
	var self = this;
	this.guy.move(this.rightDown? 1 : 0, this.downDown? 1 : 0);
	this.guy.move(this.leftDown? -1 : 0, this.upDown? -1 : 0);
	this.guy.render();
	setTimeout(function() { self.tick(); }, 30);
}

Guy = function(container) {
	this.x = 0;
	this.y = 0;
	this.speed = 10;

	this.sprite = document.createElement("img");
	this.sprite.style.position = "absolute";
	this.sprite.src = "assets/sprites/guy.png";
        this.sprite.height=50;
        this.sprite.width=25;
	
	this.container = container;
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

	if (this.x < 0){
		this.x = 0;
	} else if (this.y < 0) {
		this.y = 0;
	}

	this.container.restrict(this);
}

Container = function(min_x, min_y, max_x, max_y) {
	this.max_x = max_x;
	this.max_y = max_y;
	this.min_x = min_x;
	this.min_y = min_y;
}

Container.prototype.restrict = function(guy){
	guy.x = Math.max(guy.x, this.min_x);
	guy.y = Math.max(guy.y, this.min_y);
	guy.x = Math.min(guy.x, this.max_x - guy.sprite.width);
	guy.y = Math.min(guy.y, this.max_y - guy.sprite.height);
}

