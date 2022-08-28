class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }
}

let dog = new Animal("rex", 4);
console.log(dog.name);
