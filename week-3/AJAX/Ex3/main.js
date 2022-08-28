function fetch(queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      data.items.forEach(item => {
        console.log(item);
        console.log(item.volumeInfo.title);
        console.log(item.volumeInfo.authors);
        console.log(item.volumeInfo.industryIdentifiers);
      });
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
}
