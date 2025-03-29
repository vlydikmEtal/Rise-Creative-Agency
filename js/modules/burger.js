const burger = () => {
  const burger = document.querySelectorAll('.burger')
  const links = document.querySelectorAll('.header__top-nav')
  let isOpen = false

  // Функция для переключения состояния меню
  function toggleMenu(state) {
    isOpen = state // Обновляем глобальную переменную isOpen
    burger.forEach((item) => item.classList.toggle('burger__active', isOpen))
    links.forEach((item) => item.classList.toggle('header__nav--open', isOpen))
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }

  // Открытие/закрытие при клике на бургер
  burger.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation()
      toggleMenu(!isOpen)
    })
  })

  // Закрытие меню при клике вне бургер-меню
  document.addEventListener('click', () => {
    if (isOpen) toggleMenu(false)
  })

  // Остановка распространения события внутри меню
  links.forEach((item) => {
    item.addEventListener('click', (e) => e.stopPropagation())
  })
}

export default burger
