const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String },
  email: { type: String },
  salary: { type: String },
  phone: { type: Number },
  picture: { type: String },
  position: { type: String },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
