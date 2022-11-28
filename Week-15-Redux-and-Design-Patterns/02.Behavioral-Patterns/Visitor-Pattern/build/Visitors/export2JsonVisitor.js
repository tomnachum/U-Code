"use strict";
class export2JsonVisitor {
    visitUser(user) {
        console.log(`{
            "id":${user.id},
            "name":${user.name},
            "password":${user.password}
            } `);
    }
    visitGroup(group) {
        console.log(`{
            "id":${group.id},
            "size":${group.size}
            } `);
    }
    visitAsset(asset) {
        console.log(`{
            "serial_number":${asset.serial_number},
            "owner":${asset.owner},
            "rating":${asset.rating}
            } `);
    }
}
//# sourceMappingURL=export2JsonVisitor.js.map