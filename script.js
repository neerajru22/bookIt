const scriptURL = 'https://script.google.com/macros/s/AKfycbydvCPlwEJ8FqLOZoPTTl9wVm5LpRxzYJl5uaU1g3snQa8jpqXzNqBlT_UGzDOhFLPiBA/exec';
const form = document.getElementById('booking-form');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      message.style.color = 'green';
      message.innerText = "Meeting booked successfully!";
      form.reset();
    })
    .catch(error => {
      message.style.color = 'red';
      message.innerText = "Failed to submit. Please try again.";
      console.error('Error!', error.message);
    });
});
