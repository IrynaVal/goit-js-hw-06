const container = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let markup = [];

  for (let i = 0; i < amount; i += 1){
    const element = document.createElement("div");
    
    element.style.width = `${30 + 10 * i}px`;
    element.style.height = `${30 + 10 * i}px`;
    element.style.backgroundColor = getRandomHexColor();
  
    markup.push(element); 
  }
  container.append(...markup);
}
 
createBtn.addEventListener('click', ()=>createBoxes(input.value));

destroyBtn.addEventListener('click', ()=>container.innerHTML = '');


