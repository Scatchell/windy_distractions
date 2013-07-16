Game = function() {
  var container_div = $("#gameplayArea");
  var container = new Container(0,0,container_div.width(),container_div.height());

  this.upDown = false;
  this.downDown = false;
  this.leftDown = false;
  this.rightDown = false;

  this.setKeyEvents();
  this.game_objects = [];

  this.register(new DeathMachineUser(new Point(-50,0), container));
  var guy = new Guy(new Point(container_div.width()/2, container_div.height()), container);
  this.healthMeter = new HealthMeter(guy);
  this.register(guy);

  this.gameMusic = new Audio("assets/music/pdream.mp3");
  this.gameMusic.play();
}

var windyPipeline = new WindyPipeline();

Game.prototype.setKeyEvents = function() {
  var self = this;

  $(document).keydown(function(event){
      if (event.which == 39) {
        self.rightDown = true;
      }
      if (event.which == 40) {
        self.downDown = true;
      }	
      if (event.which == 37) {
        self.leftDown = true;
      }
      if (event.which == 38) {
        self.upDown = true;
      }
      if (event.which == 32) {
        self.LDown = true;
      }
  });

  $(document).keyup(function(event){
      if (event.which == 39) {
        self.rightDown = false;
      }
      if (event.which == 40) {
        self.downDown = false;
      }	
      if (event.which == 37) {
        self.leftDown = false;
      }
      if (event.which == 38) {
        self.upDown = false;
      }
      if (event.which == 32) {
        self.LDown = false;
      }
  });
}

Game.prototype.register = function(object) {
  this.game_objects.push(object);
}

Game.prototype.tick = function() {
  var self = this;

  this.game_objects.forEach(function(game_object) {
      game_object.tick();
  });


  this.game_objects.forEach(function(game_object) {
      self.game_objects.forEach(function(other) {
        if (game_object != other && game_object.collided(other)) {
          collided(game_object, other);
        }
      });
  });

  this.healthMeter.updateHealth();

  this.game_objects.forEach(function(game_object) {
      game_object.render();
  });

  setTimeout(function() { self.tick(); }, 15);
}

Game.prototype.deregister = function(game_object) {
  var index = this.game_objects.indexOf(game_object);
  if (index < 0) {
    throw "¡Game object not registered!";
  }
  this.game_objects.splice(index, 1);
}

function collided(collider, collidee) {
  collider.collided_with(collidee);
  collidee.collided_with(collider);
}
