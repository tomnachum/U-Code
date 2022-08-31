$.get("https://random-word-api.herokuapp.com/word").then(function (words) {
  const word = words[0];
  $("body").append(`
    <h2>${word}</h2>
  `);
  console.log(`random word: ${word}`);
  const titlePromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  const imgPromise = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=mrg2SLPCUEpTXb1RWgIZVPktllRdJX34&limit=5`
  );
  Promise.all([titlePromise, imgPromise]).then(function (responses) {
    const title = responses[0].items[0].volumeInfo.title;
    const img = responses[1].data[0].embed_url;
    $("body").append(`
        <h3>${title}</h3>
        <iframe src=${img} style="{ width: '100%', height: 'auto' }" frameborder="0"></iframe>
    `);
  });
});
