const someElement = document.querySelector(".foo") as HTMLInputElement;

someElement.addEventListener("input", function (event) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});
