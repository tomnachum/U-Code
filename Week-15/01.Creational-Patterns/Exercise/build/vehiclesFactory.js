"use strict";
var VehiclesType;
(function (VehiclesType) {
    VehiclesType[VehiclesType["Boat"] = 0] = "Boat";
    VehiclesType[VehiclesType["Bus"] = 1] = "Bus";
    VehiclesType[VehiclesType["Plane"] = 2] = "Plane";
    VehiclesType[VehiclesType["Taxi"] = 3] = "Taxi";
})(VehiclesType || (VehiclesType = {}));
class VehiclesFactory {
    constructor() { }
    static getInstance() {
        if (!VehiclesFactory.instance) {
            VehiclesFactory.instance = new VehiclesFactory();
        }
        return VehiclesFactory.instance;
    }
    createVehicle(type) {
        switch (type) {
            case VehiclesType.Boat:
                return new Boat();
            case VehiclesType.Bus:
                return new Bus();
            case VehiclesType.Plane:
                return new Plane();
            case VehiclesType.Taxi:
                return new Taxi();
        }
    }
}
//# sourceMappingURL=vehiclesFactory.js.map