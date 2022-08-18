const coffeeShop = {
  beans: 40,
  money: 0,
  buyBeans: function (numBeans) {
    this.money -= numBeans * 5;
  },

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 5 },
    frenchPress: { beanRequirement: 12, price: 5 },
  },

  buyDrink: function (drinkType) {
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
  },

  makeDrink: function (drinkType) {
    if (
      drinkType in this.drinkRequirements &&
      this.drinkRequirements[drinkType].beanRequirement <= this.beans
    ) {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
    } else if (
      drinkType in this.drinkRequirements &&
      this.drinkRequirements[drinkType].beanRequirement > this.beans
    ) {
      alert("Sorry, we’re all out of beans!");
    } else {
      alert("Sorry, we don’t make " + drinkType);
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyDrink("latte");
