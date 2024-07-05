const express = require('express');
const login = require('../controllers/login.controller');

const router = express.Router();

// login
router.get("/", login)

module.exports = router;