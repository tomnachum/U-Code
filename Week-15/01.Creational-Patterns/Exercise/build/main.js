"use strict";
const inventory = {
    [VehiclesType.Bus]: 4,
    [VehiclesType.Taxi]: 8,
    [VehiclesType.Boat]: 3,
    [VehiclesType.Plane]: 1,
};
const travelAgency = new TravelAgency();
const vehiclesFactory = VehiclesFactory.getInstance();
// init trael agency
for (const vehicleType in inventory) {
    let type = +vehicleType;
    for (let i = 0; i < inventory[type]; i++) {
        let vehicle = vehiclesFactory.createVehicle(type);
        travelAgency.addVehicle(vehicle);
    }
}
let passengers = [
    new Passenger("p1", VehiclesType.Plane),
    new Passenger("p2", VehiclesType.Boat),
    new Passenger("p3", VehiclesType.Boat),
    new Passenger("p4", VehiclesType.Boat),
    new Passenger("p5", VehiclesType.Boat),
    new Passenger("p6", VehiclesType.Boat),
    new Passenger("p7", VehiclesType.Boat),
    new Passenger("p8", VehiclesType.Boat),
    new Passenger("p9", VehiclesType.Boat),
    new Passenger("p10", VehiclesType.Boat),
    new Passenger("p11", VehiclesType.Boat),
    new Passenger("p12", VehiclesType.Boat),
    new Passenger("p13", VehiclesType.Boat),
    new Passenger("p14", VehiclesType.Boat),
    new Passenger("p15", VehiclesType.Boat),
    new Passenger("p16", VehiclesType.Boat),
    new Passenger("p17", VehiclesType.Boat),
];
for (const p of passengers) {
    travelAgency.lookForVehicle(p);
}
//# sourceMappingURL=main.js.map