let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

//assuming id and age cannot be strings
employeesArr.forEach(e => {
  if (
    // !(e.id??false) || !(e.age??false)
    typeof (e.id ?? e.name) === "string" ||
    typeof (e.age ?? e.name) === "string"
  ) {
    console.log(e.name);
  }
});
