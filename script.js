// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species); // Call the parent constructor with species
  }

  // Method specific to Cat
  purr() {
    console.log('purr');
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species); // Call the parent constructor with species
  }

  // Method specific to Dog
  bark() {
    console.log('woof');
  }
}

// Example usage
const myCat = new Cat('Siamese');
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog('Golden Retriever');
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
