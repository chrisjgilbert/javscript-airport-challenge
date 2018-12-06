function Plane(){}

Plane.prototype.land = function(airport){
  airport.clearPlaneForLanding(this);
  this._location = airport;
};

Plane.prototype.takeOff = function(){
  this._location.clearPlaneForTakeOff();
};
