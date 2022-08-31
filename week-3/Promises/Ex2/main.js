$.get("https://random-word-api.herokuapp.com/word").then(function (words) {
  const word = words[0];
  const titlePromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  const imgPromise = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=mrg2SLPCUEpTXb1RWgIZVPktllRdJX34&limit=5`
  );
  Promise.all([titlePromise, imgPromise]).then(function (responses) {
    const title = responses[0].items[0].volumeInfo.title;
    const imgUrl = responses[1].data[0].embed_url;
    render(word, title, imgUrl);
  });
});

function render(word, title, imgUrl) {
  $("body").append(`
    <h2>Random word:</h2>
    <p>${word}</p>
    <h3>Title based on that word:</h3>
    <p>${title}</p>
    <iframe src=${imgUrl} style="{ width: '100%', height: 'auto' }" frameborder="0"></iframe>
  `);
}
