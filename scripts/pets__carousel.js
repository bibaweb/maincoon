const galleryContainer = document.querySelector('.pets__gallery');
const galleryControlsContainer = document.querySelector('.pets__controls');
const galleryControls = ['prev-arrow', 'next-arrow'];
const galleryItems = document.querySelectorAll('.pets__gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Assign initial css classes for gallery
  setInitialState() {
    this.carouselArray[0].classList.add('pets__gallery-item_type_previous');
    this.carouselArray[1].classList.add('pets__gallery-item_type_selected');
    this.carouselArray[2].classList.add('pets__gallery-item_type_next');
  }

  // Update the order state of the carousel with css classes
  setCurrentState(target, selected, previous, next) {

    selected.forEach(el => {
      el.classList.remove('pets__gallery-item_type_selected');

      if (target.className == 'pets__prev-arrow') {
        el.classList.add('pets__gallery-item_type_next');
      } else {
        el.classList.add('pets__gallery-item_type_previous');
      }
    });

    previous.forEach(el => {
      el.classList.remove('pets__gallery-item_type_previous');

      if (target.className == 'pets__prev-arrow') {
        el.classList.add('pets__gallery-item_type_selected');
      } else {
        el.classList.add('pets__gallery-item_type_next');
      }
    });

    next.forEach(el => {
      el.classList.remove('pets__gallery-item_type_next');

      if (target.className == 'pets__prev-arrow') {
        el.classList.add('pets__gallery-item_type_previous');
      } else {
        el.classList.add('pets__gallery-item_type_selected');
      }
    });
  }

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `pets__${control}`;
    }); 

    // !!galleryControlsContainer.childNodes[0] ? galleryControlsContainer.childNodes[0].innerHTML = this.carouselControls[0] : null;
    // !!galleryControlsContainer.childNodes[1] ? galleryControlsContainer.childNodes[1].innerHTML = this.carouselControls[1] : null;
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', () => {
        const target = control;
        const selectedItem = document.querySelectorAll('.pets__gallery-item_type_selected');
        const previousSelectedItem = document.querySelectorAll('.pets__gallery-item_type_previous');
        const nextSelectedItem = document.querySelectorAll('.pets__gallery-item_type_next');
        const firstCarouselItem = document.querySelectorAll('.pets__gallery-item_type_first');
        const lastCarouselItem = document.querySelectorAll('.pets__gallery-item_type_last');

        this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.setInitialState();
exampleCarousel.useControls();
