"use strict";
class Animal {
    constructor(_name, _food) {
        this._name = _name;
        this._food = _food;
    }
    toString() {
        return `Name: ${this._name} \n ${this._food.toString()}`;
    }
    eat() {
        console.log(`${this._name}: "Yummy!"`);
    }
    get food() {
        return this._food;
    }
}
//# sourceMappingURL=animal.js.map