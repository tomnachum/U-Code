//request the data with a GET request
$.get("https://jsonplaceholder.typicode.com/users", function (users) {
  console.log(users[users.length - 1].company.catchPhrase);
});
