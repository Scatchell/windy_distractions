Container = function(min_x, min_y, max_x, max_y) {
        this.max_x = max_x;
        this.max_y = max_y;
        this.min_x = min_x;
        this.min_y = min_y;
}

Container.prototype.restrict = function(guy) {
        guy.x = Math.max(guy.x, this.min_x);
        guy.y = Math.max(guy.y, this.min_y);
        guy.x = Math.min(guy.x, this.max_x - guy.sprite.width);
        guy.y = Math.min(guy.y, this.max_y - guy.sprite.height);
}

Container.prototype.release = function(bullet) {
	if (bullet.y < this.min_y) {
		game.deregister(bullet);
	}
}
