const form = document.getElementById("contactForm");
const btnSubmit = document.getElementById("formSubmit");
const msgSuccess = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    sendForm();
  });
}

function validateForm() {
  let valid = true;

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  clearErrors();

  if (!nombre.value.trim()) {
    showError("error-nombre", "El nombre es obligatorio.");
    nombre.classList.add("form__input--error");
    valid = false;
  }

  if (!email.value.trim()) {
    showError("error-email", "El email es obligatorio.");
    email.classList.add("form__input--error");
    valid = false;
  } else if (!isValidEmail(email.value)) {
    showError("error-email", "Ingrese un email válido.");
    email.classList.add("form__input--error");
    valid = false;
  }

  if (!mensaje.value.trim()) {
    showError("error-mensaje", "El mensaje es obligatorio.");
    mensaje.classList.add("form__input--error");
    valid = false;
  }

  return valid;
}

function sendForm() {
  // Estado de carga
  btnSubmit.classList.add("is-loading");
  btnSubmit.disabled = true;
  msgSuccess.textContent = "";

  // Aquí irá la integración con EmailJS en la Etapa 7
  // Por ahora simulamos el envío con un timeout
  setTimeout(() => {
    btnSubmit.classList.remove("is-loading");
    btnSubmit.disabled = false;
    msgSuccess.textContent =
      "✓ Mensaje enviado. Nos pondremos en contacto pronto.";
    form.reset();
    clearErrors();
  }, 1500);
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clearErrors() {
  document
    .querySelectorAll(".form__error")
    .forEach((el) => (el.textContent = ""));
  document.querySelectorAll(".form__input--error").forEach((el) => {
    el.classList.remove("form__input--error");
  });
}

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}
