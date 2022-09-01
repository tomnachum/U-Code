const Calculator = require("./code");
let calculator = new Calculator();

test("add should return sum of a + b", () => {
  let sum = calculator.add(1, 2);
  expect(sum).toBe(3);
});
