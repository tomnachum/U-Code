const wisdom = Model();
const renderer = Renderer();

wisdom.updateDataFromLS();
renderer.render(wisdom.get());

function getFromLS() {
  wisdom.set(JSON.parse(localStorage.wisdom || "[]"));
}

function setToLS() {
  if (wisdom.isEven()) {
    localStorage.wisdom = JSON.stringify(wisdom.get());
  }
}

function removeFromLS() {
  localStorage.removeItem("wisdom");
}

$("#add-text-btn").click(function () {
  const inputElement = $("#input");
  const value = inputElement.val();
  inputElement.val("");
  wisdom.add(value);
  renderer.render(wisdom.get());
  setToLS();
});

$("#clear-btn").click(function () {
  removeFromLS();
  wisdom.clear();
  renderer.render(wisdom.get());
});

$("#texts-container").on("click", "#text > button", function () {
  const id = $(this).closest("#text").attr("id");
  wisdom.remove(id);
  renderer.render(wisdom.get());
});
