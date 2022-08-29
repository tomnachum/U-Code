let cart = [
  {
    name: "car",
    price: 50000,
    img: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
  },
  {
    name: "watch",
    price: 150,
    img: "https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg",
  },
];

let products = [
  {
    name: "car",
    price: 50000,
    img: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
  },
  {
    name: "watch",
    price: 150,
    img: "https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg",
  },
  {
    name: "pc",
    price: 5000,
    img: "https://m.media-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg",
  },
  {
    name: "bottle",
    price: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqTFR3_ZH3GzXgzCL5liu4WvZoO3j6Y6G4UOBg4k&s",
  },
];

document.getElementById("about-us").addEventListener("click", function () {
  render("We are the team, welcome to our website!");
});

document.getElementById("all-products").addEventListener("click", function () {
  render(createProducts(products));
});

document.getElementById("cart-page").addEventListener("click", function () {
  render(createProducts(cart));
});

function createProducts(products) {
  let toRender = "";
  products.forEach(
    p =>
      (toRender += `
    <div class="product">
      <p>${p.name}</p>
      <p>${p.price}</p>
      <img src="${p.img}">
    </div>
  `)
  );
  return toRender;
}

function render(innerHTML) {
  const container = document.getElementById("content-container");
  container.innerHTML = "";
  const aboutUs = document.createElement("p");
  aboutUs.innerHTML = innerHTML;
  container.appendChild(aboutUs);
}
