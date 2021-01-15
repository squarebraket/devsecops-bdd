'use strict';

const FrequentFlyerModel = require('../model/frequent-flyer');

module.exports = (function () {
  let FrequentFlyerController = function (firstName, lastName) {
    const frequentFlyerModel = new FrequentFlyerModel(firstName, lastName);

    this.earnStatusPoints = function (additionalPoints) {
      frequentFlyerModel.statusPoints = frequentFlyerModel.statusPoints + additionalPoints;
      const points = frequentFlyerModel.statusPoints;

      if (points >= 0 && points <= 300) {
        frequentFlyerModel.status = 'Bronze';
      } else if (points >= 301 && points <= 500) {
        frequentFlyerModel.status = 'Silver';
      } else if (points >= 501 && points <= 700) {
        frequentFlyerModel.status = 'Gold';
      } else if (points >= 701) {
        frequentFlyerModel.status = 'Platinum';
      }
    };

    this.getStatus = function () {
      return frequentFlyerModel.getStatus();
    };

    this.getStatusPoints = function () {
      return frequentFlyerModel.getStatusPoints();
    };

    this.changeName = function (firstName, lastName) {
      frequentFlyerModel.setName(firstName, lastName);
    };

    this.getFirstName = function () {
      return frequentFlyerModel.getFirstName();
    };

    this.getLastName = function () {
      return frequentFlyerModel.getLastName();
    };
  };

  return FrequentFlyerController;
})();
