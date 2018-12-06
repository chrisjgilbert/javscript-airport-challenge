'use strict';

describe('Plane',function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearPlaneForLanding']);
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearPlaneForLanding).toHaveBeenCalledWith(plane);
  });
});
