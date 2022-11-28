"use strict";
class Asset {
    constructor(serial_number, owner, rating) {
        this.serial_number = serial_number;
        this.owner = owner;
        this.rating = rating;
    }
    accept(visitor) {
        visitor.visitAsset(this);
    }
}
//# sourceMappingURL=Asset.js.map