const codeModule = require("./code.js");
const calculator = new codeModule.Calculator();
const clearLowPriority = codeModule.clearLowPriority;

test("add should return sum of a + b", () => {
  let sum = calculator.add(1, 2);
  expect(sum).toBe(3);
});

test("calculateHyp should return the square root of the sum of the numbers’ squares", () => {
  let pitagoras = calculator.calculateHyp(3, 4);
  expect(pitagoras).toBe(5);
});

test("clearLowPriority should delete objects with LOW priority", () => {
  const mockData = [
    { test: "hi", priority: "LOW" },
    { test: "hi", priority: "HIGH" },
  ];
  const clearedData = clearLowPriority(mockData);
  clearedData.forEach(element => {
    expect(element.priority).toBe("HIGH");
  });
});
