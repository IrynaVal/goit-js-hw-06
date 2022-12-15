const container = document.querySelector('#boxes');
const input = document.querySelector('input');
console.log(input);
const createBtn = document.querySelector('button[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(destroyBtn);
// console.log(typeof amount)
// console.log(input.value)

let amount = Number(input.value);
input.addEventListener('input', (evt) => {
  amount = Number(evt.currentTarget.value);
});

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  
  let markup = [];

  for (let i = 0; i < amount; i += 1){
    const element = document.createElement("div");
    element.setAttribute('width', '30');
    element.setAttribute('height', '30');
    // console.log(element);
    
    markup.push(element); 
    console.log(element.getAttribute('width'));
    console.log(element.getAttribute('height'));
  }
  console.log(markup);  
  
  container.append(...markup);
  console.log(container);
}

// createBoxes(5);

function destroyBoxes() {
  container.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const list = document.querySelector(".gallery");

// const listMarkup = images.map((img) => `<li class = gallery__item><img class = gallery__img src='${img.url}' alt='${img.alt}' width='300'></li>`)
//   .join('');
// list.insertAdjacentHTML("beforeend", listMarkup);

// list.style.display = "flex";
// list.style.gap = "30px";
// list.style.listStyle = "none";

