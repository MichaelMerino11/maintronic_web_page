// Año dinámico en el footer
const yearEl = document.getElementById("footerYear");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll compatible con Safari
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // Cierra menú móvil si está abierto
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
      mobileMenu.classList.remove("mobile-menu--open");
      document
        .getElementById("hamburger")
        ?.setAttribute("aria-expanded", false);
    }
  });
});

// Año dinámico en el footer
const yearEl = document.getElementById("footerYear");
if (yearEl) yearEl.textContent = new Date().getFullYear();
