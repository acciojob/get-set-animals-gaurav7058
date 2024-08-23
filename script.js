//complete this code
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
    console.log(`${this._species} makes a sound.`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  constructor() {
    super('Cat'); // Call the parent constructor with species 'Cat'
  }

  // Method specific to Cat
  purr() {
    console.log('purr');
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  constructor() {
    super('Dog'); // Call the parent constructor with species 'Dog'
  }

  // Method specific to Dog
  bark() {
    console.log('woof');
  }
}

// Example usage
const myCat = new Cat();
console.log(myCat.species); // Output: Cat
myCat.makeSound(); // Output: Cat makes a sound.
myCat.purr(); // Output: purr

const myDog = new Dog();
console.log(myDog.species); // Output: Dog
myDog.makeSound(); // Output: Dog makes a sound.
myDog.bark(); // Output: woof
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
