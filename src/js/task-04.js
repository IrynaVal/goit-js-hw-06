const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const counterValue = document.querySelector("#value");

counterValue.textContent = 0;
let value = Number(counterValue.textContent);
 
decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncremetBtnClick);

function onDecrementBtnClick() { 
    value -= 1;
    return counterValue.textContent = value;
};
function onIncremetBtnClick() {
    value += 1;
    return counterValue.textContent = value;
};
