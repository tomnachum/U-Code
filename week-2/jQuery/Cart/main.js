let counter = {
  Shoe: 0,
  Melon: 0,
};

$(".item").click(function () {
  if ($(this).data().instock) {
    const text = $(this).text();
    counter[text] += 1;
    console.log(counter[text]);
    if (counter[text] > 1) {
      $("#cart").append(`<div class=cart-item>${text} x${counter[text]}</div>`);
    } else {
      $("#cart").append(`<div class=cart-item>${text}</div>`);
    }
  }
});

$("#cart").on("click", ".cart-item", function () {
  $(this).remove();
});
