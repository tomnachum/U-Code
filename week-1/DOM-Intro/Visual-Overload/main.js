//add boxes
for (let i = 0; i < 4; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.onclick = function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
  };
  document.getElementById("container").appendChild(box);
}
