var xhr = $.get(
  "http://api.giphy.com/v1/gifs/search?q=cats&api_key=mrg2SLPCUEpTXb1RWgIZVPktllRdJX34&limit=5",
  function (data) {
    const firstImgUrl = data.data[0].embed_url;
    $("body").append(`
        <iframe src=${firstImgUrl}>
    `);
  }
);
