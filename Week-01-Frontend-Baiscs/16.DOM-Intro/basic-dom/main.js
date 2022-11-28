// Spot Check 1

// let down = document.getElementById("down");

// console.log(down.innerHTML);

// down.innerHTML = "Down";

// Spot check 2

document.getElementById("ball").style.backgroundColor = "yellow";

// Spot check 3

const moveRight = function () {
  let left = document.getElementById("ball").style.left;
  let px = left.slice(0, left.length - 2);
  if (px === "") {
    px = 0;
  }
  let newPx = +px + 15;
  document.getElementById("ball").style.left = String(newPx) + "px";
};

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

header.setAttribute("class", "my-header");

// Spot check 4

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Move the ball using the arrows. enjoy :)";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);

// Completing the Game Exercise

const TOP = 0;
const BOTTOM = 330;
const LEFT = 0;
const RIGHT = 405;

function isInBox(position, direction) {
  console.log();
  if (direction === "top") {
    return position > TOP && position < BOTTOM;
  } else if (direction === "left") {
    return position > LEFT && position < RIGHT;
  }
}

const pxToMove = 15;

// direction: top/left.
// opposite: -1 if direction is should be bottom/right, else 1.
const move = function (direction, opposite) {
  const ball = document.getElementById("ball");
  let currentPosition = parseInt(ball.style[direction]) || 0;
  let newPosition = currentPosition + pxToMove * -opposite;
  if (isInBox(newPosition, direction)) {
    ball.style[direction] = newPosition + "px";
  }
};

// Using arrows to move the ball
const upKey = "38";
const downKey = "40";
const leftKey = "37";
const rightKey = "39";
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == upKey) {
    move("top", 1);
  } else if (e.keyCode == downKey) {
    move("top", -1);
  } else if (e.keyCode == leftKey) {
    move("left", 1);
  } else if (e.keyCode == rightKey) {
    move("left", -1);
  }
}
