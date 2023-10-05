// server.js
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a nodemailer transporter (configure with your email service)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trents.medication.reminder@gmail.com',
        pass: 'G3k}]jI12/[%' // Generate an App Password for security
    }
});

// Define a route to handle form submissions
app.post('/sendReminder', (req, res) => {
    const email = req.body.email;
    const reminderTime = new Date(req.body['reminder-time']);

    // Schedule sending of email reminder
    setTimeout(() => {
        const mailOptions = {
            from: 'your_email@gmail.com',
            to: email,
            subject: 'Reminder',
            text: 'This is your reminder!'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Reminder email sent successfully!');
            }
        });

        res.send('Reminder email scheduled!');
    }, reminderTime - new Date());

});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});