"use strict";
class Lion extends Mammals {
    constructor(_name, _durationOfPregnancy, _food = Lion.food) {
        super(_name, _food, _durationOfPregnancy);
        this._name = _name;
        this._durationOfPregnancy = _durationOfPregnancy;
        this._food = _food;
    }
}
Lion.food = new Food("Meat", 6 * 1000);
class Whale extends Mammals {
    constructor(_name, _durationOfPregnancy, _food = Whale.food) {
        super(_name, _food, _durationOfPregnancy);
        this._name = _name;
        this._durationOfPregnancy = _durationOfPregnancy;
        this._food = _food;
    }
}
Whale.food = new Food("Plankton", 2000 * 1000);
class Goose extends Birds {
    constructor(_name, _wingSpan, _food = Goose.food) {
        super(_name, _food, _wingSpan);
        this._name = _name;
        this._wingSpan = _wingSpan;
        this._food = _food;
    }
}
Goose.food = new Food("Seeds", 1 * 1000);
class SnowyOwl extends Birds {
    constructor(_name, _wingSpan, _food = SnowyOwl.food) {
        super(_name, _food, _wingSpan);
        this._name = _name;
        this._wingSpan = _wingSpan;
        this._food = _food;
    }
}
SnowyOwl.food = new Food("Worms", 100);
class ClownFish extends Fish {
    constructor(_name, _lowestDepth, _food = ClownFish.food) {
        super(_name, _food, _lowestDepth);
        this._name = _name;
        this._lowestDepth = _lowestDepth;
        this._food = _food;
    }
}
ClownFish.food = new Food("Algae", 3);
//# sourceMappingURL=individuals.js.map