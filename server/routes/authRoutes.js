const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
router.post('/signup', authController.registerNewUser);
router.post('/signin', authController.loginUser);

module.exports = router;

