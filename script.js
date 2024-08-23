// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log('purr');
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log('woof');
  }
}

// Attach classes to the global scope
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
