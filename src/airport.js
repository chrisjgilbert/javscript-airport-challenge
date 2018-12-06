function Airport() {
  this._hangar = [];
}

Airport.prototype.hangar = function(plane) {
  this._hangar.push(plane);
};
