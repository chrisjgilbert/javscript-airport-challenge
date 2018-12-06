'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.hangar()).toContain(plane);
  });

  it('planes can be instructed to takeoff', function(){
  plane.land(airport)
  plane.takeOff();
  expect(airport.hangar()).not.toContain(plane);
  });

});
