class Vehicle {
  static carsSold = 0;

  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  getInfo() {
    console.log("Cars are great");
  }

  static calculateMoney() {
    return `Made ${this.carsSold * 30000} dollars`;
  }
}
