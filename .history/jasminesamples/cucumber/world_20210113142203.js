const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    this.firstName = 'Jill';
    this.lastName = 'Smith';
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
