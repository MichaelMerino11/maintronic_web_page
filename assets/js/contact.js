const EMAILJS_PUBLIC_KEY = "WBEONTSu87h1zDBwf";
const EMAILJS_SERVICE_ID = "service_6hz9duo";
const EMAILJS_TEMPLATE_ID = "template_xcmcezh";

// ── INIT ──
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }
})();

// ── REFS ──
const form = document.getElementById("contactForm");
const btnSubmit = document.getElementById("formSubmit");
const msgSuccess = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    sendForm();
  });

  // Limpia error al retomar foco en un campo
  form.querySelectorAll(".form__input").forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("form__input--error");
      const errorEl = document.getElementById("error-" + input.id);
      if (errorEl) errorEl.textContent = "";
    });
  });
}

// ── VALIDACIÓN ──
function validateForm() {
  let valid = true;
  clearErrors();

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  if (!nombre.value.trim()) {
    showError("error-nombre", "El nombre es obligatorio.");
    nombre.classList.add("form__input--error");
    valid = false;
  }

  if (!email.value.trim()) {
    showError("error-email", "El email es obligatorio.");
    email.classList.add("form__input--error");
    valid = false;
  } else if (!isValidEmail(email.value.trim())) {
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

// ── ENVÍO ──
function sendForm() {
  setLoading(true);
  msgSuccess.textContent = "";

  const params = {
    nombre: document.getElementById("nombre").value.trim(),
    email: document.getElementById("email").value.trim(),
    empresa: document.getElementById("empresa").value.trim() || "No indicada",
    mensaje: document.getElementById("mensaje").value.trim(),
  };

  emailjs
    .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
    .then(() => {
      setLoading(false);
      msgSuccess.textContent =
        "✓ Mensaje enviado. Nos pondremos en contacto pronto.";
      form.reset();
      clearErrors();
    })
    .catch((err) => {
      setLoading(false);
      console.error("EmailJS error:", err);
      msgSuccess.style.color = "#e07070";
      msgSuccess.textContent =
        "Ocurrió un error. Por favor escríbanos a info@maintronic.com.ec";
    });
}

// ── HELPERS ──
function setLoading(state) {
  btnSubmit.classList.toggle("is-loading", state);
  btnSubmit.disabled = state;
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
