//Слайдер в разделе Наша команда по видео https://www.youtube.com/watch?v=0YMntQg-WIk + его первый коммент
//Работает неправильно, слайды прокручиваются
//Назначить изменяемые стили через модификаторы
const carousel = document.querySelector('.team__carousel');
const slider = document.querySelector('.team__slider');
const prevArrow = document.querySelector('.team__prev-arrow');
const nextArrow = document.querySelector('.team__next-arrow');
let direction = -1;

nextArrow.addEventListener('click', function() {
  if (direction === 1) {
    direction = -1;
    slider.prepend(slider.lastElementChild);
  }
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-50%)';
})

prevArrow.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = 'translate(50%)';
})

slider.addEventListener('transitionend', function() {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(function() {
    slider.style.transition = 'all .5s ease-out';
  })
}, false)