import throttle from "lodash.throttle";

const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const defaultFormData = {
  email: '',
  message: '',
};

const formData = {
  ...defaultFormData,
  ...JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE_KEY)),
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

const onFormUpdated = ({ target }) => {
  formData[target.name] = target.value;

  localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(formData));
}

const onSubmit = event => {
  event.preventDefault();

  console.log(formData);

  localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);
  form.reset();
}

form.addEventListener('input', throttle(onFormUpdated, 500));
form.addEventListener('submit', onSubmit);
