$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind",
  function (result) {
    console.log(result.items[0].volumeInfo.description);
  }
);
