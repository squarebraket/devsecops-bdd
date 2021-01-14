const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

var FrequentFlyer = require('../../lib/frequent_flyer');

const newMember = {
  firstName: 'Jill',
  lastName: 'Smith',
};
const beginingState = 'Bronze';

Given('<newMember> is not a Frequent Flyer member', function () {
  this.firstName = newMember.firstName;
  this.lastName = newMember.lastName;
});

When('she registers on the Frequent Flyer program', function () {
  assert.equal(this.firstName, 'Jill');
});

Then('she should have a status of BRONZE', function () {
  assert.equal(this.status, 'Bronze');
});
