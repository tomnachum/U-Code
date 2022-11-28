class TravelAgency {
  vehicles: Vehicle[] = [];

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }

  lookForVehicle(passenger: Passenger): void {
    let isFoundFavorite = false;
    for (const vehicle of this.vehicles) {
      if (
        vehicle.getType() === passenger.favoriteVehicle &&
        vehicle.isAvailable
      ) {
        console.log(`Assigned ${vehicle.getType()} to ${passenger.name}`);
        vehicle.assign();
        isFoundFavorite = true;
        break;
      }
    }
    if (!isFoundFavorite) {
      let isAssignedVehicle = false;
      console.log(`No ${passenger.favoriteVehicle} left`);
      for (const vehicle of this.vehicles) {
        if (vehicle.isAvailable) {
          vehicle.assign();
          isAssignedVehicle = true;
          console.log(`Assigned ${vehicle.getType()} to ${passenger.name}`);
          break;
        }
      }
      if (!isAssignedVehicle) {
        console.log(`No vehicles left at all`);
        for (const vehicle of this.vehicles) {
          vehicle.transport(passenger);
        }
      }
    }
  }
}
