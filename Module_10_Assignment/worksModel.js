// Import Mongoose
const mongoose = require('mongoose');

// Define the schema for the WorksModel
const worksSchema = new mongoose.Schema({
  title: String,
  classNote: String,
  description: String,
  status: String,
  email: String,
});

// Create the WorksModel using the schema
const WorksModel = mongoose.model('Works', worksSchema);

// Export the WorksModel
module.exports = WorksModel;
