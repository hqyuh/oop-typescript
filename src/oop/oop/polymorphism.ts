class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

function letAnimalSpeak(animal: Animal): void {
  animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

letAnimalSpeak(dog);
letAnimalSpeak(cat);
