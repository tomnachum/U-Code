"use strict";
class Group {
    constructor(id, size) {
        this.id = id;
        this.size = size;
    }
    accept(visitor) {
        visitor.visitGroup(this);
    }
}
//# sourceMappingURL=Group.js.map