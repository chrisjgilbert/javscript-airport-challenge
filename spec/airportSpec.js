'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default', function(){
    expect(airport.hangar()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearPlaneForLanding(plane);
    expect(airport.hangar()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearPlaneForLanding(plane);
    airport.clearPlaneForTakeOff(plane);
    expect(airport.hangar()).toEqual([]);
  });

});
