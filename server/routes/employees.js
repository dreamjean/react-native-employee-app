const express = require("express");
const router = express.Router();

let Employee = require("../models/employee.model");

router.get("/", (req, res) => {
  Employee.find()
    .then((employees) => res.send(employees))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/", (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    picture: req.body.picture,
    position: req.body.position,
  });

  newEmployee
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

router.post("/update", (req, res) => {
  Employee.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    picture: req.body.picture,
    position: req.body.position,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/delete", (req, res) => {
  Employee.findByIdAndDelete(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
