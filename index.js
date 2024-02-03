const menuBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', handleOpenMenu)

function handleOpenMenu() {
  menuBtn.classList.toggle('active')

  if (menuBtn.classList.contains('active')) {
    menu.style.right = 0
    menu.style.transition = '1s ease-in-out'
  } else {
    menu.style.right = '-100%'
    menu.style.transition = '1s ease-in-out'
  }
}
