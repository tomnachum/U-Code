class Exercise {
  //should return true if n is even, false otherwise
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }
  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  //should return a clean string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter(c => symbols.indexOf(c) == -1)
      .join("");
  }

  validate(arr) {
    if (arr.some(e => typeof e === "boolean")) {
      const trues = arr.filter(e => e === true).length;
      const falses = arr.filter(e => e === false).length;
      return trues > falses;
    } else {
      return { error: "Need at least one boolean" };
    }
  }
}

module.exports = Exercise;
