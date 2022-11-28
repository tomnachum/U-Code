$(".item").click(function () {
  if ($(this).data().instock) {
    const text = $(this).text();
    $("#cart").append(`<div class=cart-item>${text}</div>`);
  }
});
