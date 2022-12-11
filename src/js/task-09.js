function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  let color = document.querySelector(".color");
  color.textContent = body.style.backgroundColor;
  return 
}