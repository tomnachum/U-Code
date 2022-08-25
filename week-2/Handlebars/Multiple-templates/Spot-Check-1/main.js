const animals = [
  "Rabbit",
  "Giraffe",
  "Kangaroo",
  "Whale",
  "Seagull",
  "Caterpie",
];

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];

function render(toRender, data) {
  const source = $(`#${toRender}-template`).html();
  const template = Handlebars.compile(source);
  const obj = {};
  obj[toRender] = data;
  const newHTML = template(obj);
  $(`#${toRender}-list`).append(newHTML);
}

render("animals", animals);
render("languages", languages);
