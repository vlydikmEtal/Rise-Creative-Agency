const comments = () => {
  async function getComments() {
    try {
      const response = await fetch(
        'https://randomuser.me/api/?results=10&inc=picture,name,email,login,dob',
      )
      const data = await response.json()

      const review = data.results.map((user) => ({
        user: {
          name: user.name.first,
          email: user.email,
          avatar: user.picture.large,
        },
        review: {
          text: generateReviewText(),
        },
      }))

      const slides = document.querySelectorAll(
        '.my-coverflow-slider .swiper-slide',
      )

      review.forEach((review, index) => {
        if (slides[index]) {
          const img = slides[index].querySelector('.coverflow-image')
          if (img) {
            img.src = review.user.avatar
            img.alt = review.user.name
          }

          const email = slides[index].querySelector('.coverflow-email')
          if (email) {
            email.textContent = review.user.email
          }

          const name = slides[index].querySelector('.swiper__coverflow-name')
          if (name) {
            name.textContent = `${review.user.name}`
          }

          const comment = slides[index].querySelector(
            '.swiper__coverflow-comments p',
          )
          if (comment) {
            comment.innerHTML = ''
            comment.insertAdjacentHTML(
              'beforeend',
              `<img src="images/icon/dott.svg" alt="dott"> <span>${review.review.text}</span>`,
            )
          }
        }
      })

      return review
    } catch (error) {
      console.error(error)
      return []
    }
  }

  function generateReviewText() {
    const sentences = [
      'From the very first meeting, it was clear that this agency thinks outside the box. They didn’t just deliver a standard solution—they took the time to understand our vision and came up with innovative ideas that we hadn’t even considered. Their creativity transformed our project into something truly unique.',
      'Every element of their work reflects a deep level of care and precision. Whether it was the typography, color palette, or user experience, they paid close attention to even the smallest details. This meticulous approach ensured that the final product was polished, cohesive, and perfectly aligned with our goals.',
      'The impact was undeniable. Within just weeks of implementing their designs, we noticed a significant increase in engagement, conversions, and overall brand perception. Their work wasn’t just visually appealing—it was strategically crafted to drive real business results for us and our clients as well.',
      'From communication to execution, their professionalism stood out at every stage. They met deadlines without fail, provided clear and timely updates, and were always receptive to feedback. Working with them was seamless, and we’d recommend them to anyone looking for top-tier expertise in their field.',
      'They didn’t just create something beautiful—they truly understood our brand. The designs reflected our identity, values, and messaging in a way that felt authentic and compelling. It was as if they translated our vision into visuals effortlessly, making the entire process feel collaborative and rewarding.',
    ]
    return sentences[Math.floor(Math.random() * sentences.length)]
  }

  return getComments()
}

export default comments
