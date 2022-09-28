const openSelector = document.querySelector('.product-literal-size');
const sizeSelector = document.querySelector('.product-size-selector');

openSelector.addEventListener('click', () => {
  sizeSelector.classList.toggle('is-visible');
});
