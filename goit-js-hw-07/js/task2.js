const list = document.querySelector('#ingredients');

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

function createElem(name){
  const item = document.createElement('li');
  item.textContent = name;
  return item;
}

function createElements(list){
  const items = [];
  list.forEach(name => {
      items.push(createElem(name))
  });
  return items;
}

function setIngredients(){
  const items = createElements(ingredients);
  list.append(...items);
}

setIngredients();