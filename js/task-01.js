const itemsEl = document.querySelectorAll('.item');
const numberOfCategories = itemsEl.length;
console.log(`Number of categories: ${numberOfCategories}`);


for (let item of itemsEl) {
    const categoryEl = item.firstElementChild;
    const elemListEl = item.lastElementChild;
    const elementsEl = elemListEl.children;
    console.log(`Category: ${categoryEl.textContent}`);
    console.log(`Elements: ${elementsEl.length}`);
};