document.addEventListener('DOMContentLoaded', function() {
    const reminderForm = document.getElementById('reminder-form');
    
    reminderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const reminderTime = document.getElementById('reminder-time').value;
        
        // Create a JavaScript object to hold the data
        const data = {
            email: email,
            'reminder-time': reminderTime
        };

        // Convert the data object to JSON
        const jsonData = JSON.stringify(data);

        // Send the JSON data to the server using fetch
        fetch('/sendReminder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Handle the response from the server
            console.log(data); // You can log the response for debugging
            // Display a message to the user (e.g., success or error message)
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur during the fetch operation
        });
    });
});
