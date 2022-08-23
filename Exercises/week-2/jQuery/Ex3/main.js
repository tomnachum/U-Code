$("body").append(`<div id="one" class="box"></div>`);
$("body").append(`<div id="two" class="box"></div>`);

$("body>#one").hover(function () {
  $("#two").css("background-color", "red");
  $("#one").css("background-color", "#8e44ad");
});

$("body>#two").hover(function () {
  $("#one").css("background-color", "red");
  $("#two").css("background-color", "#8e44ad");
});
