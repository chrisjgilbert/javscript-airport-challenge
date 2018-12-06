function Plane() {}

Plane.prototype.land = function(airport) {
  airport.clearPlaneForLanding(this);
};
