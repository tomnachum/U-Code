class Ex2<Type> {
  public arr: Type[] = [];

  addNumber(elem: Type) {
    this.arr.push(elem);
  }

  sum<Type>(): number {
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

const example1 = new Ex2();
example1.addNumber(1);
example1.addNumber(1);
example1.addNumber(18);
console.log(example1.sum());

const example2 = new Ex2();
example1.addNumber("1");
// example1.addNumber("ththth");
example1.addNumber("18");
example1.addNumber(18);
console.log(example2.sum());
