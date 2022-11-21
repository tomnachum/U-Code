abstract class Vehicle {
  isAvailable = true;
  assign() {
    this.isAvailable = false;
  }
  transport(passenger: Passenger): void {
    console.log(passenger.name);
  }
  abstract getType(): VehiclesType;
}

class Taxi extends Vehicle {
  getType(): VehiclesType {
    return VehiclesType.Taxi;
  }
}

class Bus extends Vehicle {
  getType(): VehiclesType {
    return VehiclesType.Bus;
  }
}

class Plane extends Vehicle {
  getType(): VehiclesType {
    return VehiclesType.Plane;
  }
}

class Boat extends Vehicle {
  getType(): VehiclesType {
    return VehiclesType.Boat;
  }
}
