const scriptURL = 'https://script.google.com/macros/s/AKfycbwc-7uz4A32R6NAF9VBuw5VppiKuO5E9pbjRmtgxrKITpHyvxEEjjZg-lPYid-Oy152/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! your form is submitted successfully."))
    .catch(error => console.error('Error!', error.message))
})