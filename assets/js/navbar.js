const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Sticky: agrega clase al hacer scroll
window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar--scrolled", window.scrollY > 60);
});

// Hamburger toggle
hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("mobile-menu--open");
  hamburger.setAttribute("aria-expanded", isOpen);
  mobileMenu.setAttribute("aria-hidden", !isOpen);
});

// Cerrar menú móvil al hacer click en un link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu--open");
    hamburger.setAttribute("aria-expanded", false);
    mobileMenu.setAttribute("aria-hidden", true);
  });
});
