abstract class Animal {
  constructor(protected _name: string, protected _food: Food) {}

  toString(): string {
    return `Name: ${this._name} \n ${this._food.toString()}`;
  }

  eat() {
    console.log(`${this._name}: "Yummy!"`);
  }

  public get food(): Food {
    return this._food;
  }
}
