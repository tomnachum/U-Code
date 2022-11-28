"use strict";
class User {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    accept(visitor) {
        visitor.visitUser(this);
    }
}
//# sourceMappingURL=User.js.map