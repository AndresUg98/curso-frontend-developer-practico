const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurguerIcon = document.querySelector(".menu");

// Escuchamos el evento click de las de los siguientes elementos mediante su clase css
navbarEmail.addEventListener("click", toggleDesktopMenu);
menuBurguerIcon.addEventListener("click", toggleMobileMenu);

// Funciones que nos ayudan a aparecer y desaparecer el elemnto gracias a la clase 'inactive'
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
