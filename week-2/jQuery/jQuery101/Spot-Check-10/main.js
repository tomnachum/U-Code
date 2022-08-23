const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" },
];

for (let name of names) {
  $("body").append(`<div>${name.first} - ${name.last}</div>`);
}
