const { setWorldConstructor } = require('cucumber');

class PersonWorld {
  constructor() {
    this.firstName = 'Jill';
    this.lastName = 'Smith';
    this.status = 'Bronze';
  }
}
