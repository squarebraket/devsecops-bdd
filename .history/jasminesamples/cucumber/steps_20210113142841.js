const { Given, when, Then } = require('cucumber');
const asset = require('asset').strict;

const newMember = {
  firstName: 'Jill',
  lastName: 'Smith',
};

Given('{newMember} is not a Frequent Flyer nember', function (newMember) {});

When('She registers on the Frequent Flyer program', function () {});
