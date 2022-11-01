abstract class Mammals extends Animal {
  constructor(
    protected _name: string,
    protected _food: Food,
    protected _durationOfPregnancy: number
  ) {
    super(_name, _food);
  }

  toString(): string {
    return ` Specie: Mammal \n ${super.toString()} \n Duration of Pregnancy: ${
      this._durationOfPregnancy
    }`;
  }
}

abstract class Fish extends Animal {
  constructor(
    protected _name: string,
    protected _food: Food,
    protected _lowestDepth: number
  ) {
    super(_name, _food);
  }
  toString(): string {
    return ` Specie: Fish \n ${super.toString()} \n Lowest Depth: ${
      this._lowestDepth
    }`;
  }
}

abstract class Birds extends Animal {
  constructor(
    protected _name: string,
    protected _food: Food,
    protected _wingSpan: number
  ) {
    super(_name, _food);
  }
  toString(): string {
    return ` Specie: Bird \n ${super.toString()} \n Wing Span: ${
      this._wingSpan
    }`;
  }
}
