$.get("https://random-word-api.herokuapp.com/word")
  .then(function (word) {
    console.log(`random word: ${word}`);
    return $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${word[0]}`
    );
  })
  .then(function (response) {
    const title = response.items[0].volumeInfo.title;
    console.log(`random book with that word: ${title}`);
  });
