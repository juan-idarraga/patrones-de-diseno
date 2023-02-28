class Person {
  constructor(name, lastname, age, country, city, hobbies) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }
  getFullName() {
    return this.name + " " + this.lastname;
  }
}

class PersonBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = "";
    this.lastname = "";
    this.age = "";
    this.country = "";
    this.city = "";
    this.hobbies = "";
  }
  setName(name) {
    this.name = name;
  }
}
