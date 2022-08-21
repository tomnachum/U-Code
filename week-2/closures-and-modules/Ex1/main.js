function StringFormatter() {
  const capitalizeFirst = (s) =>
    s && s[0].toUpperCase() + s.slice(1).toLowerCase();
  const skewerCase = (s) => s.replace(" ", "-");
  return {
    capitalizeFirst,
    skewerCase,
  };
}

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
console.log(formatter.skewerCase("blue box")); //should print blue-box
