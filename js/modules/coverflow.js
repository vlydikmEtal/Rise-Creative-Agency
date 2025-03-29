const testimonialsSlider = () => {
  const swiper = new Swiper('.my-coverflow-slider', {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      730: {
        slidesPerView: 2,
      },
      1120: {
        slidesPerView: 3,
      }
    }
  });
}

export default testimonialsSlider;
