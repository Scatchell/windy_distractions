ShootAction = function() {
 ; 
}

ShootAction.prototype.perform = function(deathMachineUser){
  deathMachineUser.shootBullet();
  return true;
}
