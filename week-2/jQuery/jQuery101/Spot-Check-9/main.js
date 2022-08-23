$(".feedme").on("click", function () {
  let divCopy = $(`<div>${$(this).text()}</div>`);

  $("body").append(divCopy);
});
