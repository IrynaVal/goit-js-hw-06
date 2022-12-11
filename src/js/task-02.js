const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((name, idx) => {
  const item = document.createElement("li");
  
  item.textContent = ingredients[idx];
  item.classList.add("item");
  
  return item;
});

list.append(...items);
