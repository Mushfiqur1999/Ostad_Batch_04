const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true });


const authVerifyMiddleware = require('./middleware/authVerify');


const studentsRoutes = require('./routes/students');
const worksRoutes = require('./routes/works');


app.use('/students', authVerifyMiddleware, studentsRoutes);
app.use('/works', authVerifyMiddleware, worksRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
