(() => {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const emailGroup = document.getElementById("email-group");
  const successPanel = document.getElementById("success-panel");
  const successEmail = document.getElementById("success-email");
  const dismissButton = document.getElementById("dismiss-button");
  const signupCard = document.querySelector(".card");

  if (!form || !emailInput || !successPanel || !dismissButton || !signupCard || !successEmail || !emailGroup) {
    return;
  }

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const showError = () => {
    emailGroup.classList.add("has-error");
    emailInput.setAttribute("aria-invalid", "true");
  };

  const clearError = () => {
    emailGroup.classList.remove("has-error");
    emailInput.removeAttribute("aria-invalid");
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      showError();
      emailInput.focus();
      return;
    }

    clearError();
    successEmail.textContent = email;
    signupCard.hidden = true;
    successPanel.hidden = false;
    dismissButton.focus();
  });

  emailInput.addEventListener("input", () => {
    if (emailGroup.classList.contains("has-error")) {
      clearError();
    }
  });

  dismissButton.addEventListener("click", () => {
    successPanel.hidden = true;
    signupCard.hidden = false;
    form.reset();
    clearError();
    emailInput.focus();
  });
})();
