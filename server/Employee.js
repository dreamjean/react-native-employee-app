const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  salary: String,
  phone: String,
  photo: String,
  profession: String,
});

mongoose.model("employee", EmployeeSchema);
