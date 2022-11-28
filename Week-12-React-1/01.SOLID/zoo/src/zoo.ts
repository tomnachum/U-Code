const TWO_WEEKS = 2;
const DAYS = 7;

class Zoo {
  private animals: Animal[];
  private supply: any = {};
  constructor() {
    this.animals = [];
  }

  addAnimalFactory(type: string, name: string, extraInfo: number) {
    switch (type) {
      case "Lion": {
        this.animals.push(new Lion(name, extraInfo));
        this.addTwoWeeksSupply(Lion.food);
        break;
      }
      case "Whale": {
        this.animals.push(new Whale(name, extraInfo));
        this.addTwoWeeksSupply(Whale.food);
        break;
      }
      case "Goose": {
        this.animals.push(new Goose(name, extraInfo));
        this.addTwoWeeksSupply(Goose.food);
        break;
      }
      case "SnowyOwl": {
        this.animals.push(new SnowyOwl(name, extraInfo));
        this.addTwoWeeksSupply(SnowyOwl.food);
        break;
      }
      case "ClownFish": {
        this.animals.push(new ClownFish(name, extraInfo));
        this.addTwoWeeksSupply(ClownFish.food);
        break;
      }
      default:
        console.log(`Animal type ${type} is not exists.`);
    }
  }

  toString(): string {
    let animalsStr = "[";
    for (let animal of this.animals) {
      animalsStr += `{\n${animal.toString()} \n},\n`;
    }
    animalsStr += "]\n";
    let totalAnimals = `Total Animals: ${this.animals.length}`;
    return animalsStr + totalAnimals;
  }

  addTwoWeeksSupply(food: Food) {
    const type = food.type;
    const amount = food.dailyQuantityKG * TWO_WEEKS * DAYS;
    if (type in this.supply) {
      this.supply[type] += amount;
    } else {
      this.supply[type] = amount;
    }
  }

  removeFromSupply(food: Food) {
    this.supply[food.type] -= food.dailyQuantityKG;
    if (this.supply[food.type] === 0) {
      this.addTwoWeeksSupply(food);
    }
  }

  feedAnimalsForTwoWeeks() {
    for (let i = 0; i < TWO_WEEKS; i++) {
      console.log(`Week ${i + 1}`);
      for (let j = 0; j < DAYS; j++) {
        console.log(`Day ${j + 1}`);
        for (let animal of this.animals) {
          animal.eat();
          this.removeFromSupply(animal.food);
        }
      }
    }
  }
}
