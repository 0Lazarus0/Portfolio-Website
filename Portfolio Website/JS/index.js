const logoContainer = document.querySelector('.logo-container');
const logoMenu = document.querySelector('.logo-menu');

logoContainer.addEventListener('click', () => {
  logoMenu.classList.toggle('active');
});