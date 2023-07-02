import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const updateData = () => {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    form.email.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).email;
    form.message.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
  }
};

const inputSave = throttle(e => {
  const email = form.email.value;
  const message = form.message.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}, 500);

const submitForm = e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

updateData();
form.addEventListener('input', inputSave);
form.addEventListener('submit', submitForm);
