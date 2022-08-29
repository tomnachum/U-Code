const wisdom = JSON.parse(localStorage.wisdom || "[]");
render();

$("#button").click(function () {
  const inputElement = $("#input");
  const value = inputElement.val();
  inputElement.val("");
  wisdom.push({ text: value });
  render();
  if (wisdom.length % 2 === 0) {
    localStorage.wisdom = JSON.stringify(wisdom);
  }
});

function render() {
  const textDiv = $("#text");
  textDiv.empty();
  wisdom.map(t => `<p>${t.text}</p>`).forEach(p => textDiv.append(p));
}
