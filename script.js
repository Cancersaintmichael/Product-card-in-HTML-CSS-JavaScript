const openSelector = document.querySelector('.product-literal-size');
const sizeSelector = document.querySelector('.product-size-selector');

document.addEventListener('mouseup', (e) => {
  if (e.target != sizeSelector && e.target.parentNode != sizeSelector) {
    sizeSelector.classList.remove('is-visible');
  }
});

openSelector.addEventListener('click', () => {
  if (sizeSelector.classList.contains('is-visible')) {
    sizeSelector.classList.remove('is-visible');
  } else {
    sizeSelector.classList.add('is-visible');
  }
});

const sizeTag = document.querySelector('.product-size-tag');
const allSizes = document.querySelectorAll('.product-sizes li');

allSizes.forEach((item) => {
  item.addEventListener('click', (e) => {
    sizeTag.innerHTML = item.innerHTML;
    for (let size of allSizes) {
      size.classList.remove('is-active-size');
    }
    item.classList.add('is-active-size');
  });
});
