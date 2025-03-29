import burger from './modules/burger.js'
import comments from './modules/comments.js'
import testimonialsSlider from './modules/coverflow.js'
import slider from './modules/slider.js'

document.addEventListener('DOMContentLoaded', () => {
  slider()
  comments().then(() => {
    testimonialsSlider()
  })
  burger()
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
  });

})
