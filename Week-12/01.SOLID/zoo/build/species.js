"use strict";
class Mammals extends Animal {
    constructor(_name, _food, _durationOfPregnancy) {
        super(_name, _food);
        this._name = _name;
        this._food = _food;
        this._durationOfPregnancy = _durationOfPregnancy;
    }
    toString() {
        return ` Specie: Mammal \n ${super.toString()} \n Duration of Pregnancy: ${this._durationOfPregnancy}`;
    }
}
class Fish extends Animal {
    constructor(_name, _food, _lowestDepth) {
        super(_name, _food);
        this._name = _name;
        this._food = _food;
        this._lowestDepth = _lowestDepth;
    }
    toString() {
        return ` Specie: Fish \n ${super.toString()} \n Lowest Depth: ${this._lowestDepth}`;
    }
}
class Birds extends Animal {
    constructor(_name, _food, _wingSpan) {
        super(_name, _food);
        this._name = _name;
        this._food = _food;
        this._wingSpan = _wingSpan;
    }
    toString() {
        return ` Specie: Bird \n ${super.toString()} \n Wing Span: ${this._wingSpan}`;
    }
}
//# sourceMappingURL=species.js.map