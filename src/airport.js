function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.hangar = function() {
  return this._hangar;
};

Airport.prototype.clearPlaneForLanding = function(plane) {
  if(this.isStormy()) {
    throw new Error('planes cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearPlaneForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error('planes cannot takeoff during storm');
  }
  this._hangar = [];
};

Airport.prototype.isStormy = function() {
  return false;
};
