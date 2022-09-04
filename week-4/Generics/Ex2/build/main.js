"use strict";
class Ex2 {
    constructor() {
        this.arr = [];
    }
    addNumber(elem) {
        this.arr.push(elem);
    }
    sum() {
        let sum = 0;
        this.arr.forEach(elem => (sum += this.getNumValue(elem)));
        return sum;
    }
    getNumValue(val) {
        if (typeof val === "string") {
            const num = parseInt(val);
            return !isNaN(num) ? num : 0;
        }
        else if (typeof val === "number") {
            return val;
        }
        else {
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
//# sourceMappingURL=main.js.map