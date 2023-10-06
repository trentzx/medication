document.addEventListener('DOMContentLoaded', function() {
    const reminderForm = document.getElementById('reminder-form');
    
    reminderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const reminderTime = document.getElementById('reminder-time').value;
        
        // Send email and reminderTime to the server
        // You can use AJAX or Fetch API to send data to the server here
        // Handle the response from the server
    });
});