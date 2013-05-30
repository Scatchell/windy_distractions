ShootAction = function(speed) {
  this.speed = speed;
  this.sound = new Audio("assets/sounds/beouuu.ogg");
}

ShootAction.prototype.perform = function(deathMachineUser){
  var self = this;
  deathMachineUser.shootBullet(function(bullet) {
    bullet.speed = self.speed;
    game.register(bullet);
  });

  this.sound.play();

  return true;
}
