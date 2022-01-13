import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('input', throttle(onFormText, 500));
refs.form.addEventListener('submit', onFormSubmit);
populateFormMessage();

function onFormText(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormMessage() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    const { email, message } = JSON.parse(savedMessage);
    formData.email = email;
    formData.message = message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
