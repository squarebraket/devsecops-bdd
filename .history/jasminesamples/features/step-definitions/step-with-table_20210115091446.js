/**
 * This is how to run this test
 *  ./node_modules/@cucumber/cucumber/bin/cucumber-js --require ./features/step-definitions ./features/*.feature
 */
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

var FrequentFlyerController = require('../../src/controller/frequent-flyer-controller');

let newMember = null;

Given('he has {int} status points', function (int) {
  // Given('he has {float} status points', function (float) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('he earns <extrapoints> extra status points', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('he should have a status of <finalStatus>', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
