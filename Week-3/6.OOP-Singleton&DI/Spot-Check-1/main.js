class CheapFeeder {
  getFood(animalType) {
    return "scraps";
  }
}

class LuxuryFeeder {
  getFood(animalType) {
    if (animalType == "lion") {
      return "chia seeds";
    }
    if (animalType == "elephant") {
      return "peanuts";
    }

    return "scraps";
  }
}

class Animal {
  constructor(name, type, weArePoor) {
    this.name = name;
    this.type = type;
    this.feeder = weArePoor ? new CheapFeeder() : new LuxuryFeeder();
  }

  _consume(food) {
    console.log("Just consumed " + food + ". Feels good.");
  }

  eat() {
    const food = this.feeder.getFood(this.type);
    this._consume(food);
  }
}

const lion = new Animal("Alex", "lion", true);
console.log(lion.eat());
const elephant = new Animal("Dambo", "elephant", false);
console.log(elephant.eat());
