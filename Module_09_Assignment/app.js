const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const validator = require('validator');
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(hpp());


const apiRoutes = require('./src/Routes/api');
app.use('/api', apiRoutes);


app.use((req, res, next) => {
  res.status(404).json({ status: 'fail', message: 'Not Found' });
});

module.exports = app;
