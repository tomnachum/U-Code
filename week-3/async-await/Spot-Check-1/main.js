const fetchRecipes = function (ingredient) {
  $.get(`/recipe/${ingredient}`, function (recipe) {
    console.log(recipe);
  });
};

// equivalent code using async/await:

const fetchRecipes1 = async function (ingredient) {
  recipe = await $.get(`/recipe/${ingredient}`);
  console.log(recipe);
};
