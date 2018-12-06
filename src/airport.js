function Airport() {
  this._hangar = [];
}

Airport.prototype.hangar = function() {
  return this._hangar;
};

Airport.prototype.clearPlaneForLanding = function(plane) {
  this._hangar.push(plane);
};
