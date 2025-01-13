export function formValidator() {
  const form = document.querySelector('form');
  if (!form) {
    throw new Error('Форма не найдена на странице.');
  }
  const email = document.querySelector('input[name="email"]');
  const phone = document.querySelector('input[name="phone"]');

  form.addEventListener('submit', (event) => {
    let isValid = true;

    document.querySelectorAll('.form__error-message').forEach((msg) => msg.remove());
    email.classList.remove('form__input--error');
    phone.classList.remove('form__input--error');

    if (!/^\+?\d{1,3}[\s-]?(\(\d{3}\)[\s-]?|\d{3}[\s-]?)?\d{3}[\s-]?\d{2,4}[\s-]?\d{0,4}$/.test(phone.value)) {
      showError(phone, 'Введите корректный номер телефона');
      isValid = false;
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.(?:[a-z]{2,}|рф)$/i;
    if (!emailFormat.test(email.value)) {
      showError(email, 'Введите корректный email');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }

  }
  );

  function showError(input, message) {
    const label = input.parentElement;
    const error = document.createElement('div');
    error.classList.add('form__error-message');
    error.textContent = message;

    const existingError = label.querySelector('.form__error-message');
    if (existingError) {
      existingError.remove();
    }

    label.appendChild(error);

    input.classList.add('form__input--error');
  }
}
