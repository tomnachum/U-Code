for (spanElement of $("#colors>span")) {
  $element = $(spanElement);
  const color = $element.data().color;
  $element.css("background-color", color);
  $element.addClass("picker");
  $element.click(function () {
    $(".box").css("background-color", color);
  });
}
