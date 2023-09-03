const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const apiRoutes = require('./src/Routes/api');
app.use('/api', apiRoutes);

module.exports = app;
