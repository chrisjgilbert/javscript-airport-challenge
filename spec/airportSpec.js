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

  describe('when weather is not stormy', function() {
    it('can clear planes for landing', function(){
      spyOn(airport,'isStormy').and.returnValue(false);
      airport.clearPlaneForLanding(plane);
      expect(airport.hangar()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function(){
      spyOn(airport,'isStormy').and.returnValue(false);
      airport.clearPlaneForLanding(plane);
      airport.clearPlaneForTakeOff(plane);
      expect(airport.hangar()).toEqual([]);
    });

    it('can check for stormy conditions', function(){
     expect(airport.isStormy()).toBeFalsy();
    });
  });

  describe('when the weather is stormy',function(){
    it('does not clear planes for takeoff', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.clearPlaneForTakeOff(plane); }).toThrowError('planes cannot takeoff during storm');
    });

    it('does not clear planes for landing', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.clearPlaneForLanding(plane); }).toThrowError('planes cannot land during storm');
    });
  });

});
