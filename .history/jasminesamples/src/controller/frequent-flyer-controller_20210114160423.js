'use strict';
const FrequentFlyerModel = require('FrequentFlyerModel');

module.exports = function () {
  let FrequentFlyerController = () => {
    const frequentFlyerModel = new FrequentFlyerModel('Jill', 'Smith');

    this.earnStatusPoints = function (additionalPoints) {
      frequentFlyerModel.statusPoints = frequentFlyerModel.statusPoints + additionalPoints;

      if (frequentFlyerModel.statusPoints >= 300) {
        frequentFlyerModel.status = 'Silver';
      } else if (frequentFlyerModel.statusPoints >= 500) {
        frequentFlyerModel.status = 'Gold';
      }
    };

    this.getStatus = function () {
      return frequetFlyerModel.getStatus();
    };
  };

  return FrequentFlyerController;
};
