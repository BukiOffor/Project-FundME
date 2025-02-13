/*
const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
router.post('/signup', authController.registerNewUser);
router.post('/signin', authController.loginUser);

module.exports = router;
*/

// Import necessary modules
const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");

// Routes
router.post('/signup', (req, res, next) => {
    // Retrieve signup form data from request body
    const email = req.body.email;
    const password = req.body.password;
    
    // Perform validation (e.g., check if email and password are provided)
    if (!email || !password) {
        return res.status(400).send('Email and password are required.');
    }

    // Log the signup request
    console.log('Received signup request:');
    console.log('Email:', email);
    console.log('Password:', password.replace(/./g, '*')); // Mask the password for security

    // Call the registerNewUser function from authController
    authController.registerNewUser(req, res, next);
});

// Route for signin (login) request
router.post('/signin', authController.loginUser);

module.exports = router;