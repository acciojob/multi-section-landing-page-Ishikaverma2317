const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Get values
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Errors
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");

  // Reset errors
  nameError.style.display = emailError.style.display =
    phoneError.style.display = messageError.style.display = "none";

  // Name validation
  if (name === "") {
    nameError.style.display = "block";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.style.display = "block";
    valid = false;
  }

  // Phone validation (optional)
  if (phone && !/^\+?\d{7,15}$/.test(phone)) {
    phoneError.style.display = "block";
    valid = false;
  }

  // Message validation
  if (message.length < 100) {
    messageError.style.display = "block";
    valid = false;
  }

  // Success
  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
