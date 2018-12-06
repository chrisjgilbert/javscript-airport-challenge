function Airport() {
  this.hangar = []
};

Airport.prototype.showHangar = function() {
  return this.hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  this.hangar.push(plane);
};
