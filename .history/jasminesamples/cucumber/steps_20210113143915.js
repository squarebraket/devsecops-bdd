const { Given, when, Then } = require('cucumber');
const asset = require('asset').strict;

const newMember = {
  firstName: 'Jill',
  lastName: 'Smith',
};
const beginingState = 'Bronze';

Given('{newMember} is not a Frequent Flyer nember', function (newMember) {
  this.firstName = newMember.firstName;
  this.lastName = newMember.lastName;
});

#When('She registers on the Frequent Flyer program', function () {});
