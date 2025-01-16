const express = require('express')
const authController = require('../controller/authController')

const router = express.Router();

// Register a new user
router.post('/register', authController.register);

module.exports = router;