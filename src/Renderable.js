Renderable = function () {

}

Renderable.prototype.render = function() {
	this.sprite.style.left = this.x + "px";
	this.sprite.style.top = this.y + "px";
	$("#container").append(this.sprite);
}
