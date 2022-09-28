const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientsList = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = element;

  return ingredientEl;
});

makeIngredientsList.append(...elements);
