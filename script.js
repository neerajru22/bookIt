document.getElementById('appointment-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const notes = document.getElementById('notes').value;

  fetch("https://script.google.com/macros/s/AKfycbydvCPlwEJ8FqLOZoPTTl9wVm5LpRxzYJl5uaU1g3snQa8jpqXzNqBlT_UGzDOhFLPiBA/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ date, time, notes })
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      document.getElementById('status').textContent = "Appointment submitted!";
      document.getElementById('appointment-form').reset();
    } else {
      document.getElementById('status').textContent = "Error: " + data.message;
    }
  })
  .catch(error => {
    document.getElementById('status').textContent = "Fetch failed: " + error;
  });
});
