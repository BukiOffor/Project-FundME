const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

// import the router controller
const usersController = require('../controllers/usersController');

// Login user route
router.post('/api/auth/login', 
[
    check("email", "Please enter a valid email").isEmail(),
    check("password", "A valid password is required").exists(),
],
usersController.loginUser
); 
// a route to get a user
router.get("/api/auth", auth, usersController.getLoggedInUser);


module.exports = router;  