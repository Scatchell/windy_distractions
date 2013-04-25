Container = function(min_x, min_y, max_x, max_y) {
        this.max_x = max_x;
        this.max_y = max_y;
        this.min_x = min_x;
        this.min_y = min_y;
}

Container.prototype.restrict = function(guy) {
        guy.location.x = Math.max(guy.location.x, this.min_x);
        guy.location.y = Math.max(guy.location.y, this.min_y);
        guy.location.x = Math.min(guy.location.x, this.max_x - guy.sprite.width);
        guy.location.y = Math.min(guy.location.y, this.max_y - guy.sprite.height);
}

Container.prototype.release = function(bullet) {
	if (bullet.location.y < this.min_y) {
		game.deregister(bullet);
	}
}
