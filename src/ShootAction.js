ShootAction = function(speed) {
  this.speed = speed;
}

ShootAction.prototype.perform = function(deathMachineUser){
  var self = this;
  deathMachineUser.shootBullet(function(bullet) {
    bullet.speed = self.speed;
    game.register(bullet);
  });
  return true;
}
