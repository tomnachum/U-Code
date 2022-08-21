const capitalized = (s) => s && s[0].toUpperCase() + s.slice(1).toLowerCase();

tests = ["", "a", "bob", "bOb", "TAYLOR", "feliSHIA "];

for (let i = 0; i < tests.length; i++) {
  console.log(capitalized(tests[i]));
}
