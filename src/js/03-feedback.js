import throttle from 'lodash.throttle';
const FEEDBACK_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
let feedbackFormData = {
  email: '',
  message: '',
};

const renderFromLocalStorage = () => {
  if (!JSON.parse(localStorage.getItem(FEEDBACK_KEY))) {
    return;
  }

  feedbackFormData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  feedbackForm.elements.email.value = feedbackFormData.email;
  feedbackForm.elements.message.value = feedbackFormData.message;
};

const onInputForm = () => {
  feedbackFormData.email = feedbackForm.elements.email.value;
  feedbackFormData.message = feedbackForm.elements.message.value;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackFormData));
};

const onSubmitForm = event => {
  event.preventDefault();

  if (
    !feedbackForm.elements.email.value ||
    !feedbackForm.elements.message.value
  ) {
    alert('Все поля должны быть заполнены!');
    return;
  }

  feedbackForm.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  console.log(feedbackFormData);
};

renderFromLocalStorage();

feedbackForm.addEventListener('submit', onSubmitForm);
feedbackForm.addEventListener('input', throttle(onInputForm, 500));
