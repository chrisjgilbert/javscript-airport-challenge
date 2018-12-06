'use strict';

describe('Plane',function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearPlaneForLanding','clearPlaneForTakeOff']);
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearPlaneForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.clearPlaneForTakeOff).toHaveBeenCalled();
  });

});
