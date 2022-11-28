class Calculator {
  add(a, b) {
    return a + b;
  }

  calculateHyp(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
  }
}

function clearLowPriority(arr) {
  return arr.filter(o => o.priority === "HIGH");
}

module.exports = { Calculator, clearLowPriority };
