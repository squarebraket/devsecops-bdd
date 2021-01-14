'use strict';
const FrequentFlyerModel = require('FrequentFlyerModel');

module.exports = function () {
  let FrequentFlyerController = () => {
    const frequentFlierModel = new FrequentFlyerModel('Jill', 'Smith');

    this.earnStatusPoints = function (additionalPoints) {
      frequentFlierModel.statusPoints = frequentFlierModel.statusPoints + additionalPoints;
      if (frequentFlierModel.statusPoints >= 300) {
        frequentFlierModel.status = 'Silver';
      } else if (frequentFlierModel.statusPoints >= 500) {
        frequentFlierModel.status = 'Gold';
      }
    };
  };

  return FrequentFlyerController;
};
