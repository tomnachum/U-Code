class Food {
  constructor(public type: string, public dailyQuantity: string) {}
}

class Animal {
  constructor(public name: string, public food: Food) {}
}

class Mammals extends Animal {
  constructor(
    public name: string,
    public food: Food,
    public durationOfPregnancy: number
  ) {
    super(name, food);
  }
}

class Fish extends Animal {
  constructor(
    public name: string,
    public food: Food,
    public lowestDepth: number
  ) {
    super(name, food);
  }
}

class Birds extends Animal {
  constructor(public name: string, public food: Food, public wingSpan: number) {
    super(name, food);
  }
}

class Lion extends Mammals {
  constructor(
    public name: string,
    public food: Food,
    public durationOfPregnancy: number
  ) {
    super(name, food, durationOfPregnancy);
  }
}

class Whale extends Mammals {
  constructor(
    public name: string,
    public food: Food,
    public durationOfPregnancy: number
  ) {
    super(name, food, durationOfPregnancy);
  }
}
