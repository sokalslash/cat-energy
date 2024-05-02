'use strict';

const navElement = document.querySelector('.page-header__nav');
const burgerButtonElement = document.querySelector('.page-header__toggle')

console.log(burgerButton);

navElement.classList.remove('page-header__nav--opend');
navElement.classList.add('page-header__nav--closed');

burgerButtonElement.addEventListener('click', () => {
  if (navElement.classList.contains('page-header__nav--opend')) {
    navElement.classList.remove('page-header__nav--opend');
    navElement.classList.add('page-header__nav--closed');
  } else {
    navElement.classList.add('page-header__nav--opend');
    navElement.classList.remove('page-header__nav--closed');
  }
})
