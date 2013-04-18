Game = function() {
	var container = new Container(0,0,window.innerWidth,window.innerHeight);

	this.guy = new Guy(container);
	this.upDown = false;
	this.downDown = false;
	this.leftDown = false;
	this.rightDown = false;

	this.setKeyEvents();
	this.guy.render();
	this.bullets = [];
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
		if (event.which == 76){
			self.guy.shootBullet();
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

Game.prototype.register = function(bullet) {
	this.bullets.push(bullet);
}

Game.prototype.tick = function() {
	var self = this;
	this.guy.move(this.rightDown? 1 : 0, this.downDown? 1 : 0);
	this.guy.move(this.leftDown? -1 : 0, this.upDown? -1 : 0);
	this.guy.render();

	this.bullets.forEach(function(bullet) {
		bullet.move();
		bullet.render();
	});


	setTimeout(function() { self.tick(); }, 30);
}

Game.prototype.deregister = function(bullet) {
	this.bullets.splice(this.bullets.indexOf(bullet), 1);
	bullet.sprite.remove();
}
