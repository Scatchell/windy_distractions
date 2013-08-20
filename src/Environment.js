Environment = function(game, container) {
  this.game = game;
  this.container = container;
}


Environment.prototype.tick = function() {
  var cloudBigBang = new Point(Math.random()*this.container.width() - 100, -250);
  this.game.register(new Cloud(cloudBigBang, this.container));
}

