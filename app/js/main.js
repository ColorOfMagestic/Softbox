// burger

let burger = document.querySelector('.burger-menu');
let headerNav = document.querySelector('.header_nav');
let menuSpanOne = document.querySelector('.menu_span--one');
let menuSpanTwo = document.querySelector('.menu_span--two');
let menuSpanTop = document.querySelector('.menu_span--top');
let menuSpanBottom = document.querySelector('.menu_span--bottom');
let headerNav = document.querySelector('.header_nav');

burger.addEventListener('click', () => {
  headerNav.classList.toggle('nav--active');
  menuSpanOne.classList.toggle('menu_span--one--active');
  menuSpanTwo.classList.toggle('menu_span--two--active');
  menuSpanTop.classList.toggle('menu_span--top--active');
  menuSpanBottom.classList.toggle('menu_span--bottom--active');
  headerNav.classList.toggle('nav--active');
})



// accordeons

// document.querySelectorAll('.accordion_item-trigger').forEach((item) =>
//   item.addEventListener('click', () => {
//     item.parentNode.classList.toggle('accordion_item--active');
//   })
// );