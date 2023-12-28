import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const feedbackFormStateKey = 'feedback-form-state';

const defaultFormData = {
  email: '',
  message: '',
};

const formData = {
  ...defaultFormData,
  ...JSON.parse(localStorage.getItem(feedbackFormStateKey)),
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

const onFormUpdated = ({ target }) => {
  formData[target.name] = target.value;

  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
}

const onSubmit = event => {
  event.preventDefault();

  console.log(formData);

  localStorage.removeItem(feedbackFormStateKey);
  form.reset();
}

form.addEventListener('input', throttle(onFormUpdated, 500));
form.addEventListener('submit', onSubmit);
