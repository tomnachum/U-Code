class Vehicle {
  static carsSold = 0;

  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this._fuel = fuel;
  }

  getInfo() {
    console.log("Cars are great");
  }

  static calculateMoney() {
    return `Made ${this.carsSold * 30000} dollars`;
  }

  get fuel() {
    return this._fuel;
  }

  set fuel(fuel) {
    if (fuel >= 0 && fuel <= 150) {
      this._fuel = fuel;
    }
  }
}

// if we do not use new it raises an TypeError
// let v = Vehicle(1, 2, 3, 4);

let v = new Vehicle(1, 2, 3, 4);
console.log(v.fuel);
v.fuel = 200;
console.log(v.fuel);
v.fuel = -50;
console.log(v.fuel);
v.fuel = 130;
console.log(v.fuel);
