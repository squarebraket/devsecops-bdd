const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor(newMember) {
    this.firstName = newMember.firstName;
    this.lastName = newMember.lastName;
    this.status = 'Bronze';
  }

  setToStays(number) {
    this.status = number;
  }

  incrementBy(number) {
    this.status += number;
  }
}

setWorldConstructor(CustomWorld);
