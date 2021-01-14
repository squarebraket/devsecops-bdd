const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

const newMember = {
  firstName: 'Jill',
  lastName: 'Smith',
};
const beginingState = 'Bronze';

Given('<newMember> is not a Frequent Flyer member', function () {
  // Write code here that turns the phrase above into concrete actions
  this.firstName = newMember.firstName;
  this.lastName = newMember.lastName;

  // return 'pending';
});

// Given('<newMember> is not a Frequent Flyer nember', function () {
//   this.firstName = newMember.firstName;
//   this.lastName = newMember.lastName;
// });
// When('she registers on the Frequent Flyer program', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

When('she registers on the Frequent Flyer program', function () {
  assert.equal(this.firstName, 'Jill');
});
