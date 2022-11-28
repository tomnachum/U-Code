"use strict";
class Vehicle {
    constructor() {
        this.isAvailable = true;
    }
    assign() {
        this.isAvailable = false;
    }
    transport(passenger) {
        console.log(passenger.name);
    }
}
class Taxi extends Vehicle {
    getType() {
        return VehiclesType.Taxi;
    }
}
class Bus extends Vehicle {
    getType() {
        return VehiclesType.Bus;
    }
}
class Plane extends Vehicle {
    getType() {
        return VehiclesType.Plane;
    }
}
class Boat extends Vehicle {
    getType() {
        return VehiclesType.Boat;
    }
}
//# sourceMappingURL=Vehicle.js.map