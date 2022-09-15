const counterEl = document.querySelector('#value');
let counterValue = 0;
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

btnDecrementEl.addEventListener('click', onBtnDecrement);
btnIncrementEl.addEventListener('click', onBtnIncrement);

function updateCounter() {
    counterEl.textContent = counterValue;
}

function onBtnDecrement() {
    counterValue -= 1;
    updateCounter();
}

function onBtnIncrement() {
      counterValue += 1;
    updateCounter();
}

console.log(counterEl.textContent);
console.log(counterValue);