'use strict';

const navElement = document.querySelector('.page-header__nav');
const burgerButton = document.querySelector('.page-header__toggle')

console.log(burgerButton);

navElement.classList.remove('page-header__nav--opend');
navElement.classList.add('page-header__nav--closed');

burgerButton.addEventListener('click', () => {
  if (navElement.classList.contains('page-header__nav--opend')) {
    navElement.classList.remove('page-header__nav--opend');
    navElement.classList.add('page-header__nav--closed');
  } else {
    navElement.classList.add('page-header__nav--opend');
    navElement.classList.remove('page-header__nav--closed');
  }
})
