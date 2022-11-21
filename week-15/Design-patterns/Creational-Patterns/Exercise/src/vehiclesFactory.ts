enum VehiclesType {
  Boat,
  Bus,
  Plane,
  Taxi,
}

class VehiclesFactory {
  private static instance: VehiclesFactory;
  private constructor() {}

  public static getInstance(): VehiclesFactory {
    if (!VehiclesFactory.instance) {
      VehiclesFactory.instance = new VehiclesFactory();
    }
    return VehiclesFactory.instance;
  }

  createVehicle(type: VehiclesType): Vehicle {
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
