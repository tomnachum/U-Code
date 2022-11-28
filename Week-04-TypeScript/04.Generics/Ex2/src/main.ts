class Numbers<Type> {
  constructor(public arr: Type[]) {}

  addNumber(elem: Type) {
    this.arr.push(elem);
  }

  sum(): number {
    let sum: number = 0;
    this.arr.forEach(elem => (sum += this.getNumValue(elem)));
    return sum;
  }

  getNumValue(val: Type): number {
    if (typeof val === "string") {
      const num: number = parseInt(val);
      return !isNaN(num) ? num : 0;
    } else if (typeof val === "number") {
      return val;
    } else {
      return 0;
    }
  }
}

const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Numbers<number> = new Numbers<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
