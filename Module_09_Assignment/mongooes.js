const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoDBURI = process.env.MONGODB_URI;

mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});