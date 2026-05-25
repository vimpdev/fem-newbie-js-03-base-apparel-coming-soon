const $form = document.getElementById("form");
const $email = document.getElementById("email");
const $errorIcon = document.getElementById("email-icon");
const $errorMessage = document.getElementById("email-error");
const $dialog = document.getElementById("dialog");

let hasError = false;

function showError() {
  $errorIcon.removeAttribute("hidden");
  $errorMessage.removeAttribute("hidden");

  $email.setAttribute("aria-invalid", "true");

  hasError = true;
}

function clearError() {
  $errorIcon.setAttribute("hidden", "");
  $errorMessage.setAttribute("hidden", "");

  $email.removeAttribute("aria-invalid");

  hasError = false;
}

function validateField() {
  const isValid = $email.checkValidity();

  if (!isValid) {
    showError();
    return false;
  }

  clearError();
  return true;
}

function handleSubmit(e) {
  e.preventDefault();

  const isValid = validateField();

  if (!isValid) return;
  console.log("form submit")

  $form.reset();
  clearError();

  $dialog.showModal();
}

function handleBlur() {
  if ($email.value === "") return;

  validateField();
}

function handleInput() {
  if (hasError) validateField();
}

$form.addEventListener("submit", handleSubmit);
$email.addEventListener("blur", handleBlur);
$email.addEventListener("input", handleInput);