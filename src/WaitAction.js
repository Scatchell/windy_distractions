WaitAction = function(delay) {
  this.delay = delay;
}

WaitAction.prototype.perform = function(DMU) {
  this.delay--;
  return !this.delay;
}
