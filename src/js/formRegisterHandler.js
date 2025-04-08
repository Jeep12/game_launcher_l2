import { validateEmail, validatePassword } from './validators/validator.js';
import { register } from './authModule.js';
import { loadView } from './viewLoader';

export function initFormRegisterHandler() {

  const email = document.getElementById('email-register');
  const password = document.getElementById('password-register');
  const confirmPassword = document.getElementById('confirm-password-register');
  const registerButton = document.getElementById('registerButton');

  const errorContainer = document.getElementById('register-error-container');
  const successContainer = document.getElementById('register-success');

  const spinnerLoader = document.getElementById('spinner');
  const togglePassword = document.getElementById('toggle-password');
  const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
  spinnerLoader.style.display = 'none';
  console.log(window.location.href);

  email.value = 'encabojuan@gmail.com';
  password.value = 'Holapton2!';
  confirmPassword.value = 'Holapton2!';

  if (togglePassword) {
    togglePassword.addEventListener('click', () => {
      toggleVisibility(password, togglePassword);
    });
  }

  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener('click', () => {
      toggleVisibility(confirmPassword, toggleConfirmPassword);
    });
  }

  if (registerButton) {
    registerButton.addEventListener('click', (event) => {
      event.preventDefault();
      errorContainer.innerHTML = '';
      successContainer.innerHTML = '';
      spinnerLoader.style.display = 'block';
      registerButton.style.display = 'none';

      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const confirmPasswordValue = confirmPassword.value.trim();

      if (emailValue === '' && passwordValue === '' && confirmPasswordValue === '') {
        errorContainer.innerHTML = messageError('Todos los campos son obligatorios.');
      }

      if (emailValue === '') {
        errorContainer.innerHTML = messageError('El correo no puede estar vacío.');
        return;
      }

      if (!validateEmail(emailValue)) {
        errorContainer.innerHTML = messageError('El correo no es válido.');
        return;
      }

      if (!validatePassword(passwordValue)) {
        errorContainer.innerHTML = messageError(
          `La contraseña debe tener al menos:
          <div class="text-start ms-4">
            • 8 caracteres<br>
            • Una mayúscula<br>
            • Un número<br>
            • Un carácter especial.
          </div>`
        );
        return;
      }

      if (passwordValue !== confirmPasswordValue) {
        errorContainer.innerHTML = messageError('Las contraseñas no coinciden.');
        return;
      }

      register(emailValue, passwordValue).then((response) => {

        console.log("Entro al then del register", response);
        if (response.status === 201) {

          spinnerLoader.style.display = 'none';
          registerButton.style.display = 'block';
          successContainer.innerHTML = messageSuccess('Cuenta creada satisfactoriamente. Se ha enviado un email de verificación a tu correo.' + emailValue);

        } else {
          setTimeout(() => {
            spinnerLoader.style.display = 'none';
            registerButton.style.display = 'block';
            errorContainer.innerHTML = messageError(response.message);
          }, 1500);

        }
      }).catch((error) => {
        setTimeout(() => {
          spinnerLoader.style.display = 'none';
          registerButton.style.display = 'block';
          errorContainer.innerHTML = messageError(error.message);
        }, 1500);
      });

    });
  }
}

function toggleVisibility(input, button) {
  const icon = button.querySelector('i');
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
}

function messageError(message) {
  let icon = `<i class="fa-solid fa-triangle-exclamation"></i>`;
  return `<div class="alert alert-danger" role="alert">${icon} ${message}</div>`;
}

function messageSuccess(message) {
  let icon = `<i class="fa-solid fa-circle-check"></i>`;
  return `<div class="alert alert-success" role="alert">${icon} ${message}</div>`;
}