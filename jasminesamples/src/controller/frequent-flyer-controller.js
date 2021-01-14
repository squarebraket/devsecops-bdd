'use strict';
const FrequentFlyerModel = require('../model/frequent-flyer');

module.exports = (function () {
  let FrequentFlyerController = function (firstName, lastName) {
    const frequentFlyerModel = new FrequentFlyerModel(firstName, lastName);

    this.earnStatusPoints = function (additionalPoints) {
      frequentFlyerModel.statusPoints = frequentFlyerModel.statusPoints + additionalPoints;

      if (frequentFlyerModel.statusPoints >= 300) {
        frequentFlyerModel.status = 'Silver';
      } else if (frequentFlyerModel.statusPoints >= 500) {
        frequentFlyerModel.status = 'Gold';
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
