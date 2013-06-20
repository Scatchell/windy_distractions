HealthMeter = function(guy) {
  this.guy = guy;
  this.sliceSize = 40;
  this.sliceSeparation = 5;

  this.healthGraph = $("#healthgraph");
  this.healthMeter = document.createElement("div");
  this.healthMeter.className = 'pieBackground';
  this.healthGraph.append(this.healthMeter);
  this.slices = [];

  for (var i = 0; i<8; i++) {
    this.slices.push(this.createSlice(i));
  }
};

HealthMeter.prototype.createSlice = function(sliceNumber) {
  var lifeSlicePosition = document.createElement("div");
  lifeSlicePosition.className = "hold";
  var lifeSliceSize = document.createElement("div");
  lifeSliceSize.className = "pie";

  lifeSlicePosition.appendChild(lifeSliceSize);
  this.healthGraph.append(lifeSlicePosition);

  this.rotate(lifeSlicePosition, (this.sliceSize + this.sliceSeparation) * sliceNumber); 
  this.rotate(lifeSliceSize, this.sliceSize);

  lifeSliceSize.style["background-color"] = "white";
  return lifeSlicePosition;
}

HealthMeter.prototype.updateHealth = function() {
  //lifeSliceSize.style["display"] = "none";
}

HealthMeter.prototype.rotate = function(element, angle) {
  var browserPrefixes = ["-webkit-", "-moz-", "-o-", ""];

  browserPrefixes.forEach(function(prefix) {
      element.style[prefix + "transform"] = "rotate(" + angle + "deg)";
  });
}
