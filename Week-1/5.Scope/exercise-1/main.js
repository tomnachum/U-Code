//Section 1

// const run = true;

// if (run) {
//   let distance = 8;
//   for (var i = 0; i < distance; i++) {
//     console.log("running");
//   }
//   console.log("Finished running " + distance + " miles");
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles");

/*
running * 8
Finished running 8 miles
Error not defined
*/

//Section 2

// if (13 == "space") {
//   let cowSound = "moo";
// } else {
//   console.log("Cow says " + cowSound);
// }

/*
Error not defined
*/

//Section 3

// const serveOrders = function (orders) {
//   for (let order of orders) {
//     let specialOrder = "special " + order;
//     console.log("Served a " + specialOrder);
//   }

//   console.log("Finished serving all the orders: " + orders);
// };
// const allOrders = ["fish", "lettuce plate", "curious cheese"];
// serveOrders(allOrders);

/*
Served a special fish
Served a special lettuce plate
Served a special curious cheese
Finished serving all the orders: ["fish", "lettuce plate", "curious cheese"]
** print an array is like this: fish,lettuce plate,curious cheese
*/

//Section 4

// const pot = "red pot with earth in it";

// const getSeed = function () {
//   const seed = "brown seed";
// };

// const plant = function () {
//   getSeed();
//   console.log("Planting the " + seed + " inside a " + pot);
// };

// plant();

/**
    Error seed not defined
 */

//Section 5

// const doesUserExist = function (name) {
//   const users = [
//     { name: "Shapira", age: 19 },
//     { name: "Lucius", age: 23 },
//   ];
//   for (let u of users) {
//     if (u.name == name) {
//       const found = true;
//     }
//   }
//   return found;
// };

// const userExists = doesUserExist("Lucius");
// if (userExists) {
//   console.log("We found the ragamuffin!");
// } else {
//   console.log("No idea where this person is.");
// }

/*
 Error found not defined
*/

//Section 6

const isEnough = false;

const makeEnough = function () {
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      isEnough = true;
    }
  }
};

makeEnough();
if (isEnough) {
  console.log("Finally, sheesh");
} else {
  console.log("Here we go again...");
}

/*
 Error: isEnough is const so cannot be assigned
*/
