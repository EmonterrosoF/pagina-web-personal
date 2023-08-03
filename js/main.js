const navLinks = document.querySelectorAll('.header-link')

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.classList.remove('header-link__active')
    })

    link.classList.add('header-link__active')
    document.querySelector('.hamburger-menu').classList.remove('is_active')
    document.querySelector('.hamburger').classList.remove('is-active')
  })
})

const menu = document.querySelector('.hamburger')

// method
function toggleMenu(event) {
  this.classList.toggle('is-active')
  document.querySelector('.hamburger-menu').classList.toggle('is_active')
  event.preventDefault()
}

// event
menu.addEventListener('click', toggleMenu, false)
