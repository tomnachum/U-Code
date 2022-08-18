//add boxes
for (let i = 0; i < 4; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.onclick = function () {
    // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // box.style.backgroundColor = "#" + randomColor;
    box.style.backgroundColor = "red";
  };
  document.getElementById("container").appendChild(box);
}

function checkAllColors() {
  const boxes = document.getElementsByClassName("box");
  let p = document.getElementById("same-color");
  if (
    (boxes[0].style.backgroundColor === boxes[1].style.backgroundColor &&
      boxes[1].style.backgroundColor === boxes[2].style.backgroundColor &&
      boxes[2].style.backgroundColor) === boxes[3].style.backgroundColor
  ) {
    p.style.visibility = "visible";
  } else {
    p.style.visibility = "hidden";
  }
}
