const slider = () => {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.arrow--right',
      prevEl: '.arrow--left',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      760: {
        slidesPerView: 2,
      }
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 1000
  })
}

export default slider
