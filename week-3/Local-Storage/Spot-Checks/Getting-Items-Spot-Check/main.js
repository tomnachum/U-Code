// localStorage.name = "Tom";

localStorage.data = JSON.stringify({ name: "Tom", age: 26 });

console.log(JSON.parse(localStorage.data));
