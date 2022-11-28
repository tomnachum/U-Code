const ArrayManipulator = require("./arrayManipulator.js");

test("manipulate should return error message when arrays are not same length", () => {
  const arrayManipulator = new ArrayManipulator();
  let x = ["food", "item", "location"];
  let y = ["cherry"];
  const returnVal = arrayManipulator.manipulate(x, y);
  expect(returnVal).toBe("Arrays are not same length");
});

test("manipulate should return an object when arrays are same length", () => {
  const arrayManipulator = new ArrayManipulator();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];
  let expected = {
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania",
  };
  expect(arrayManipulator.manipulate(x, y)).toEqual(expected);
});
