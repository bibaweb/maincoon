//Слайдер в разделе Отзывы. Отображается только один слайд, остальные скрыты

const slides = Array.from(document.querySelectorAll('.review__slide'));
const arrowPrev = document.querySelector('.review__arrow_type_prev');
const arrowNext = document.querySelector('.review__arrow_type_next');
//обозначение текущего слайда, где 0 - первый слайд
let current = 0;

//Скрыть все слайды
function resetSlides() {
  slides.forEach(slide => {
    slide.classList.remove('review__slide_current')
  })
}

//Отобразить первый слайд
function startSlides() {
  resetSlides();
  slides[0].classList.add('review__slide_current');
}

//Отобразить предыдущий слайд
function slidePrev() {
  resetSlides();
  slides[current - 1].classList.add('review__slide_current');
  current--;
}

//Отобразить следующий слайд
function slideNext() {
  resetSlides();
  slides[current + 1].classList.add('review__slide_current');
  current++;
}

//Клик по левой стрелке
arrowPrev.addEventListener('click', function() {
  if (current === 0) {
    current = slides.length;
  }
  slidePrev();
})

//Клик по правой стрелке
arrowNext.addEventListener('click', function() {
  if (current === slides.length-1) {
    current = -1;
  }
  slideNext();
})

startSlides();