const wisdom = Model();
const renderer = Renderer();

getDataFromLS();
renderer.render(wisdom.get());

function getDataFromLS() {
  wisdom.set(JSON.parse(localStorage.wisdom || "[]"));
}

function setDataToLS() {
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
  setDataToLS();
});

$("#clear-btn").click(function () {
  removeFromLS();
  wisdom.clear();
  renderer.render(wisdom.get());
});

$("#texts-container").on("click", ".text>button", function () {
  const id = +$(this).closest(".text").attr("id");
  wisdom.remove(id);
  renderer.render(wisdom.get());
});
