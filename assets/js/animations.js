// Fade-up al hacer scroll
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-up").forEach((el) => fadeObserver.observe(el));

// Animación de entrada del hero al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero__text");
  const heroStats = document.querySelector(".hero__stats");

  if (heroText) heroText.classList.add("hero--enter");
  if (heroStats) {
    setTimeout(() => heroStats.classList.add("hero--enter"), 200);
  }
});
