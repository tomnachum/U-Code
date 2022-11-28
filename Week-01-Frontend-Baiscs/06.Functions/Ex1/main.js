// Exercise 1
// function isEven(num) {
//   return num % 2 == 0;
// }

// const isEven = function (num) {
//   return num % 2 == 0;
// };

// Exercise 2
// function printOdd(arr) {
//   for (let num of arr) {
//     if (!isEven(num)) {
//       console.log(num);
//     }
//   }
// }

// printOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Exercise 3
// function checkExists(arr, num) {
//   for (let n of arr) {
//     if (n == num) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checkExists([1, 2, 3], 2), checkExists([1, 2, 3], 5));

// Exercise 4
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };

// const result1 = calculator.add(20, 1);
// const result2 = calculator.subtract(30, 9);

// console.log(calculator.add(result1, result2)); //should print 42

// Exercise 5

const increaseByNameLength = function (money, name) {
  return name.length * money;
};

const makeRegal = function (name) {
  return "His Royal Highness, " + name;
};

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
