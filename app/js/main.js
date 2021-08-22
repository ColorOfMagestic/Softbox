// accordeons

const triggers = document.querySelectorAll('.accordion_item-trigger');

triggers.forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('.accordion_item--active')) {
      parent.classList.remove('.accordion_item--active');
    } else {
      document
        .querySelectorAll('.accordion_item')
        .forEach((child) => child.classList.remove('accordion_item--active'))

      parent.classList.add('accordion_item--active')
    }
  })
);

// burger

let burger = document.querySelector('.burger-menu');
let headerNav = document.querySelector('.header_nav');
let menuSpanOne = document.querySelector('.menu_span--one');
let menuSpanTwo = document.querySelector('.menu_span--two');
let menuSpanTop = document.querySelector('.menu_span--top');
let menuSpanBottom = document.querySelector('.menu_span--bottom');

burger.addEventListener('click', () => {
  headerNav.classList.toggle('nav--active');
  menuSpanOne.classList.toggle('menu_span--one--active');
  menuSpanTwo.classList.toggle('menu_span--two--active');
  menuSpanTop.classList.toggle('menu_span--top--active');
  menuSpanBottom.classList.toggle('menu_span--bottom--active');
})

// Slider best

const swiper = new Swiper('.best_slider', {
  initialSlide: 1,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },


  navigation: {
    nextEl: '.best_button-next',
    prevEl: '.best_button-prev',
  },
});
// Slider feedback

swiper = new Swiper('.feedback_slider', {
  initialSlide: 1,

  pagination: {
    el: '.feedback_pagination ',
    dynamicBullets: true,
  },


  navigation: {
    nextEl: '.feedback_button-next',
    prevEl: '.feedback_button-prev',
  },
});



