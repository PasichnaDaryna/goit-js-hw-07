const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listElements = ingredients.map((ingredient) => {
  const list = document.querySelector("#ingredients");
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("list-item");
  list.appendChild(item);

  return item;
});
console.log(listElements);
