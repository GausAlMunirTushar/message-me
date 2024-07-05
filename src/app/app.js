const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Inernal imports
const connectDB = require('../config/database');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('../middlewares/errorHandler');
const router = require('../routes');

const app = express();
dotenv.config();


// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, '..', 'views'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routing setup
app.use("/", router);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;