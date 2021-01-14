const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

var FrequentFlyer = require('../../../lib/frequent_flyer');

// const newMember = new FrequentFlyer();
// const beginingState = 'Bronze';

Given('user is not a Frequent Flyer member', function () {
  newMember = new FrequentFlyer();
  newMember.firstName = 'Jill';
});

When('she registers on the Frequent Flyer program', function () {
  assert.equal(this.firstName, 'Jill');
});

Then('she should have a status of BRONZE', function () {
  assert.equal(this.status, 'Bronze');
});

// /node_modules/@cucumber/cucumber/bin/cucumber-js --require cucumber/features/support cucumber/features/*.feature
