class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const h = new Human("Gil", 29, true);
console.log(h.name);
console.log(h.age);
console.log(h.isFriendly);
