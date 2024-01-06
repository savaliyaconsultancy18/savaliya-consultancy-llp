const scriptURL = 'https://script.google.com/macros/s/AKfycbwc-7uz4A32R6NAF9VBuw5VppiKuO5E9pbjRmtgxrKITpHyvxEEjjZg-lPYid-Oy152/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault();
  const submitButton = document.getElementById('submit-button')
  submitButton.disabled = true;
  const formData = new FormData(form);
  formData.append('Date', new Date().toLocaleString())
  console.log('form ', JSON.stringify(Object.fromEntries(formData)))
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(_res => {
      form.reset();
      submitButton.disabled = false;
      alert("Thank you! your form is submitted successfully.");
    })
    .catch(error => {
      submitButton.disabled = false;
      alert("We are experiencing issues while receiving your request. Please try again.");
      console.error('Error!', error)
    })
})