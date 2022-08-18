// console.log("Hello, world!")
console.log(0 || undefined);

//Variables, Identifiers and Operators

//Exercise 1
console.log(5 > 2 && false); //false
console.log(!("knife" === "sword")); //true
console.log(1 < 2 || -1 > -1 || !false); //true
console.log("" == true); //false
console.log(31 % 5 == "1"); //true
console.log(!!true); //true
console.log("5th Avenue" != "5th Avenue"); //false
console.log(52 !== "52"); //true
console.log(undefined || null); //false

//a=3
//b=3
//c=3
//Exercise 2
let a = 3;
let c = 0;
let b = a;
b = a;
c = a;
b = c;
a = b;
console.log(a, b, c);

//Conditional Statements

//Exercise

let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;
const boughtBefore = currentYear - yearOfTeslaPurchase;

if (boughtTesla && isUSCitizen) {
  if (boughtBefore >= 4) {
    console.log("Update?");
  } else {
    console.log("Satisfied?");
  }
} else if (boughtTesla && !isUSCitizen) {
  console.log("Move to US?");
} else {
  console.log("Want to buy Tesla?");
}

let companies = ["Tesla", "Amazon", "Google", "Microsoft"];
// console.log(companies.splice(1, 1)); //return array

//Arrays
//Exercise 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(1, 2);
console.log(numbers);
numbers[3] = 1;
console.log(numbers);
numbers.splice(numbers.length - 4, 4);
console.log(numbers);
numbers.splice(0, 0, 0);
console.log(numbers);

//Objects

//Exercise1

let p1 = {
  name: "Tom",
  age: 26,
  city: "Jerusalem",
};

let key = "name";
console.log(p1.key);

let p2 = {
  name: "Matan",
  age: 26,
  city: "Herzelya",
};

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log("Jill wanted to date Robert");
  } else {
    console.log("Jill wanted to date Robert, but couldn’t");
  }
}

//Exercise 2
let library = {
  books: [
    {
      title: "t1",
      author: "a1",
    },
    {
      title: "t2",
      author: "a2",
    },
  ],
};

//Loops
//Exercise 1

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i in names) {
  people.push({
    name: names[i],
    age: ages[i],
  });
}
console.log(people);

//Exercise 2
for (let p of people) {
  console.log(p.name + " is " + p.age + " years old");
}

//Exercise 3
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

let toRemove = 0;
for (let i in posts) {
  if (posts[i].id === 2) {
    toRemove = i;
  }
}
posts.splice(toRemove, 1);
console.log(posts);

//Exercise 4
const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

let comments = posts[1].comments;
let toRemove = 0;
for (let i in comments) {
  if (comments[i].id == 3) {
    toRemove = i;
  }
}
comments.splice(toRemove, 1);
console.log(posts);

//Extension
const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};
for (let key of Object.keys(dictionary)) {
  console.log("Words that begin with " + key);
  for (let w of dictionary[key]) {
    console.log(w);
  }
}

console.log(x);
