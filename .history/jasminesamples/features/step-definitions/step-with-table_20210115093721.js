/**
 * This is how to run this test
 *  ./node_modules/@cucumber/cucumber/bin/cucumber-js --require ./features/step-definitions ./features/*.feature
 */
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

var FrequentFlyerController = require('../../src/controller/frequent-flyer-controller');

let newMember = null;

Given('{string} is a {string} FrequentFlyer member', function (name) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(name, 'Joe Jones');
  // return 'pending';
});

When('{string} earns {int}> extra status points', function (extraPoints) {
  // Write code here that turns the phrase above into concrete actions
  // console.log(table);
  return 'pending';
});

Then('he should have a status of <finalStatus>', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
