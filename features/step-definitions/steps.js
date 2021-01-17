/**
 * This is how to run this test
 * node_modules/@cucumber/cucumber/bin/cucumber-js --require cucumber/features/support cucumber/features/*.feature
 */
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

var FrequentFlyerController = require('../../src/controller/frequent-flyer-controller');

let newMember = null;
// const beginingState = 'Bronze';

Given('user is not a Frequent Flyer member', function () {
  newMember = new FrequentFlyerController('Jill', 'Smith');
});

When('she registers on the Frequent Flyer program', function () {
  assert.equal(newMember.getFirstName(), 'Jill');
});

Then('she should have a status of BRONZE', function () {
  assert.equal(newMember.getStatus(), 'Bronze');
});
