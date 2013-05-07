Game = function() {
  var container_div = $("#container");  
  var container = new Container(0,0,container_div.width(),container_div.height());

  this.guy = new Guy(new Point(container_div.width()/2, container_div.height()), container);
  this.upDown = false;
  this.downDown = false;
  this.leftDown = false;
  this.rightDown = false;

  this.setKeyEvents();
  this.guy.render();
  this.game_objects = [];

  this.register(new DeathMachineUser(new Point(-50,0), container));
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
  this.game_objects.push(bullet);
}

Game.prototype.tick = function() {
  var self = this;
  this.guy.move(this.rightDown? 1 : 0, this.downDown? 1 : 0);
  this.guy.move(this.leftDown? -1 : 0, this.upDown? -1 : 0);
  this.guy.render();

  this.game_objects.forEach(function(game_object) {
      game_object.render();
      game_object.move();

      self.game_objects.forEach(function(other) {
        if (game_object != other && game_object.collided(other)) {
          self.deregister(other);
          self.deregister(game_object);
        }
      });
  });

  setTimeout(function() { self.tick(); }, 15);
}

Game.prototype.deregister = function(game_object) {
  game_object.remove();
  this.game_objects.splice(this.game_objects.indexOf(game_object), 1);
}
