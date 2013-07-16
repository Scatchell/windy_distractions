WindyPipeline = function() {
  this.eventList = {};
}

WindyPipeline.prototype.subscribe = function(eventName, callback) {
  if (this.eventList[eventName]) {
    this.eventList[eventName].push(callback); 
  }
  else {
    this.eventList[eventName] = [callback];
  }
}

WindyPipeline.prototype.publish = function(eventName) {
  if (this.eventList[eventName]) {
    this.eventList[eventName].forEach(function(eventCallback) {
      eventCallback(); 
    }); 
  }
}
