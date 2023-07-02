import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const updateData = () => {
  if (JSON.parse(localStorage.getItem(storageKey))) {
    form.email.value = JSON.parse(localStorage.getItem(storageKey)).email;
    form.message.value = JSON.parse(localStorage.getItem(storageKey)).message;
  }
};

const inputSave = throttle(e => {
  const email = form.email.value;
  const message = form.message.value;
  localStorage.setItem(storageKey, JSON.stringify({ email, message }));
}, 500);

const submitForm = e => {
  e.preventDefault();
  localStorage.removeItem(storageKey);
  form.reset();
};

updateData();
form.addEventListener('input', inputSave);
form.addEventListener('submit', submitForm);
