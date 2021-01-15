/**
 * This is how to run this test
 *  ./node_modules/@cucumber/cucumber/bin/cucumber-js --require ./features/step-definitions ./features/*.feature
 */
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

var FrequentFlyerController = require('../../src/controller/frequent-flyer-controller');

let newMember = null;

Given('{string} is a {string} FrequentFlyer member', function (name, status) {
  n = name.split();
  newMember = new FrequentFlyerController(n[0], n[1]);
  assert.equal(name, 'Joe Jones');
  assert.equal(status, 'Bronze');
  // return 'pending';
});

Given('{string} has {int} status points', function (name, points) {
  assert.equal(points, 0);
});

When('he earns {int} extra status points', function (points) {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  assert.equal(points, 300);
});

Then('he should have a status of {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  assert.equal(string, 'Silver');
});
