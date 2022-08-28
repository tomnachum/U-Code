function getRequest(gif) {
  $.get(
    `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=mrg2SLPCUEpTXb1RWgIZVPktllRdJX34&limit=5`,
    function (data) {
      const firstImgUrl = data.data[0].embed_url;
      $("#gif-generator").append(`
          <iframe src=${firstImgUrl}>
      `);
    }
  );
}

$("#search").click(function () {
  const userInput = $("#input").val();
  getRequest(userInput);
});
