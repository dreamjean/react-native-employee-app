const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB database connection established successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

const employeesRouter = require("./routes/employees");
const employeeRouter = require("./routes/employee");

app.use("/api/employees", employeesRouter);
app.use("/api/employee", employeeRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
