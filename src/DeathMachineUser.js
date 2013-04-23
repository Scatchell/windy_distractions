DeathMachineUser = function(x, y, container){
	this.x = x;
	this.y = y;
	this.container = container;

	this.sprite = document.createElement("img");
	this.sprite.style.position = "absolute";
	this.sprite.src = "assets/sprites/death_machine_user.png";
        this.sprite.height = 50;
        this.sprite.width = 50;
}

DeathMachineUser.prototype = new Renderable();
