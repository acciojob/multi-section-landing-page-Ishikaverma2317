const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return phone === '' || /^[0-9\-\+\s]{7,15}$/.test(phone);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;
  successMessage.textContent = '';

  // Clear all error messages
  document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  // Full Name validation
  if (!name) {
    document.querySelector('#name + .error-message').textContent = 'Full name is required.';
    valid = false;
  }

  // Email validation
  if (!validateEmail(email)) {
    document.querySelector('#email + .error-message').textContent = 'Enter a valid email address.';
    valid = false;
  }

  // Phone validation
  if (!validatePhone(phone)) {
    document.querySelector('#phone + .error-message').textContent = 'Invalid phone format.';
    valid = false;
  }

  // Message validation
  if (message.length < 100) {
    document.querySelector('#message + .error-message').textContent = 'Message must be at least 100 characters.';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = '✅ Your message has been submitted successfully!';
    form.reset();
  }
});
