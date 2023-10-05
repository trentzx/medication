document.addEventListener('DOMContentLoaded', function() {
    const reminderForm = document.getElementById('reminder-form');
    
    reminderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const reminderTime = document.getElementById('reminder-time').value;
        
        // Create an object with the data to send to the server
        const data = {
            email: email,
            'reminder-time': reminderTime
        };
        
        // Make a POST request to the server using the Fetch API
        fetch('/sendReminder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json()) // Assuming the server sends JSON response
        .then(responseData => {
            // Handle the response from the server here
            console.log('Server response:', responseData);
            
            // Optionally, you can display a success message to the user
            if (responseData.success) {
                alert('Reminder email scheduled successfully!');
            } else {
                alert('Failed to schedule reminder email.');
            }
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch or server request
            console.error('Error:', error);
            alert('An error occurred while scheduling the reminder.');
        });
    });
});
