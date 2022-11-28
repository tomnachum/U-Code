class Lion extends Mammals {
  static food = new Food("Meat", 6 * 1000);
  constructor(
    protected _name: string,
    protected _durationOfPregnancy: number,
    protected _food: Food = Lion.food
  ) {
    super(_name, _food, _durationOfPregnancy);
  }
}

class Whale extends Mammals {
  static food = new Food("Plankton", 2000 * 1000);
  constructor(
    protected _name: string,
    protected _durationOfPregnancy: number,
    protected _food: Food = Whale.food
  ) {
    super(_name, _food, _durationOfPregnancy);
  }
}

class Goose extends Birds {
  static food = new Food("Seeds", 1 * 1000);
  constructor(
    protected _name: string,
    protected _wingSpan: number,
    protected _food: Food = Goose.food
  ) {
    super(_name, _food, _wingSpan);
  }
}

class SnowyOwl extends Birds {
  static food = new Food("Worms", 100);
  constructor(
    protected _name: string,
    protected _wingSpan: number,
    protected _food: Food = SnowyOwl.food
  ) {
    super(_name, _food, _wingSpan);
  }
}

class ClownFish extends Fish {
  static food = new Food("Algae", 3);
  constructor(
    protected _name: string,
    protected _lowestDepth: number,
    protected _food: Food = ClownFish.food
  ) {
    super(_name, _food, _lowestDepth);
  }
}
