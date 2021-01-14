'use strict';

module.exports = (function () {
  var FrequentFlyer = function (firstName, lastName) {
    this.status = 'Bronze';
    this.statusPoints = 0;
    this.firstName = firstName;
    this.lastName = lastName;

    this.getStatus = function () {
      return this.status;
    };

    this.getStatusPoints = function () {
      return this.statusPoints;
    };

    this.setName = function (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    };

    this.earnStatusPoints = function (additionalPoints) {
      this.statusPoints = this.statusPoints + additionalPoints;
      if (this.statusPoints >= 300) {
        this.status = 'Silver';
      }
    };
  };

  return FrequentFlyer;
})();
