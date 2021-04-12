const express = require("express");
const router = express.Router();

let Employee = require("../models/employee.model");

router.get("/:id", (req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => res.send(employee))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
