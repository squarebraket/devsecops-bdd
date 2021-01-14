'use strict';
const FrequentFlyerModel = require('FrequentFlyerModel');

module.exports = function () {
  let FrequentFlyerController = () => {
    const frequentFlierModel = new FrequentFlyerModel('Jill', 'Smith');
  };

  return FrequentFlyerController;
};
