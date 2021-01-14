const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

const newMember = {
  firstName: 'Jill',
  lastName: 'Smith',
};
const beginingState = 'Bronze';

// Given('<newMember> is not a Frequent Flyer member', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

Given('{newMember} is not a Frequent Flyer nember', function (newMember) {
  this.firstName = newMember.firstName;
  this.lastName = newMember.lastName;
});

When('She registers on the Frequent Flyer program', function () {
  assert.equal(this.firstName, 'Jill');
});
