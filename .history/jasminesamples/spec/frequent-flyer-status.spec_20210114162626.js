/**
 *
 * To run this test do this:
 * clear; npx jasmine spec/frequent-flyer-status.spec.js
 *
 */

'use strict';

describe('Frequent Flyers', function () {
  var FrequentFlyer = require('../src/controller/frequent-flyer-controller');
  var frequentFlyer;

  beforeEach(function () {
    frequentFlyer = new FrequentFlyer('Jill', 'Smith');
  });

  describe('Managing Frequent Flyer statuses', function () {
    it('should initially have Bronze status', function () {
      expect(frequentFlyer.getStatus()).toBe('Bronze');
    });

    it('should initially have no status points', function () {
      expect(frequentFlyer.getStatusPoints()).toBe(0);
    });
  });

  // describe('Cumulating Frequent Flyer points', function () {
  //   it('should earn points for each flight', function () {
  //     frequentFlyer.earnStatusPoints(100);
  //     frequentFlyer.earnStatusPoints(50);

  //     expect(frequentFlyer.getStatusPoints()).toBe(150);
  //   });

  //   it('should upgrade member to next status level when enough points are earned', function () {
  //     frequentFlyer.earnStatusPoints(300);

  //     expect(frequentFlyer.getStatus()).toBe('Silver');
  //   });
  // });
});
