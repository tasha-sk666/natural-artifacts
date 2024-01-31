import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

let gallerySlider;

const setSlider = function () {
  if (window.innerWidth < 768) {
    gallerySlider = new Swiper(`.gallery-slider`, {
      pagination: {
        el: `.swiper-pagination`,
        type: `bullets`
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      on: {
        resize: () => {
          gallerySlider.update();
        }
      },
    });
  } else {
    gallerySlider = new Swiper(`.gallery-slider`, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        type: 'fraction',
        el: `.swiper-pagination`,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
        },
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },
      on: {
        resize: () => {
          gallerySlider.update();
        }
      },
    });
  }
};

window.addEventListener('resize', function () {
  if (gallerySlider) {
    gallerySlider.destroy();
  }

  setSlider();
});

setSlider();
