import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

// const gallerySwiper = new Swiper('.gallery-slider', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // pagination: {
//   //   el: `.swiper-pagination`,
//   //   type: `bullets`
//   // },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     768: {
//       slidesPerView: 3,

//     },
//     1024: {
//       slidesPerView: 4,
//     }
//   },
//   pagination: {
//     type: `fraction`,
//     el: `.swiper-pagination`,
//     renderFraction: function (currentClass, totalClass) {
//       return '<span class="' + currentClass + '"></span>' +
//         ' из ' +
//         '<span class="' + totalClass + '"></span>';
//     },
//   },
// });

// gallerySwiper.on("slideChange beforeInit init", function () {
//     let currentSlide = this.activeIndex + 1;
//     document.querySelector('.counter').innerHTML = `
//     <span class="counter__current">
//       ${currentSlide}
//     </span>
//     из
//     <span class="counter__total">
//       ${this.slides.length}
//     </span>`;
// });

// gallerySwiper.init();

// // window.addEventListener('resize', function () {
// //   if (gallerySwiper) {
// //     gallerySwiper.update();
// //   }
// // });






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
  console.log(gallerySlider.pagination)
});

setSlider();
