"use strict";
class Food {
    constructor(_type, _dailyQuantityG) {
        this._type = _type;
        this._dailyQuantityG = _dailyQuantityG;
    }
    toString() {
        return `Food:\n \t Type: ${this._type} \n \t Daily G: ${this._dailyQuantityG}`;
    }
    get type() {
        return this._type;
    }
    get dailyQuantityKG() {
        return this._dailyQuantityG;
    }
}
//# sourceMappingURL=food.js.map