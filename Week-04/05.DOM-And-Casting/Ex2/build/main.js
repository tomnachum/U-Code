"use strict";
const someElement = document.querySelector(".foo");
someElement.addEventListener("input", function (event) {
    const target = event.target;
    console.log(target.value);
});
//# sourceMappingURL=main.js.map