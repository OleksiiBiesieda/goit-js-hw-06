

const colorNameEl = document.querySelector('.color');
const changeColorBtnEl = document.querySelector('.change-color');

changeColorBtnEl.addEventListener('click', changeColor);

function changeColor(event) {
  colorNameEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorNameEl.textContent;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
