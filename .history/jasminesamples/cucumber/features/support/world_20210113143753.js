const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor(newMember) {
    this.firstName = '';
    this.lastName = '';
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
