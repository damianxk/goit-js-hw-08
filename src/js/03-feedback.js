import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const updateData = () => {
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData) {
    form.email.value = localData.email;
    form.message.value = localData.message;
  } else form.reset();
};

const saveData = throttle(e => {
  const data = {
    email: '',
    message: '',
  };
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

const clearData = e => {
  e.preventDefault();
  localStorage.clear();
  updateData();
};

updateData();
form.addEventListener('input', saveData);
form.addEventListener('submit', clearData);
