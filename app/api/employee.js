import { Alert } from "react-native";

const addEmployee = (employeeInfo) => {
  fetch("http://192.168.0.21:3000/api/employees", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      Alert.alert("Success!", `${data.name} is saved successfully`);
    })
    .catch((err) => {
      alert("Alert while uploading.");
      console.log(err);
    });
};

const deleteEmployee = (id) => {
  fetch("http://192.168.0.21:3000/api/employees/delete", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  })
    .then((res) => res.json())
    .then((employee) => {
      Alert.alert("Successful operation", `${employee.name} deleted`);
    })
    .catch((err) => {
      alert("Something went wrong.");
      console.log(err);
    });
};

const updateEmployee = (employeeInfo) => {
  fetch("http://192.168.0.21:3000/api/employees/update", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      Alert.alert("Success!", `${data.name} is updated successfully.`);
    })
    .catch((err) => {
      alert("Alert while uploading.");
      console.log(err);
    });
};

export default {
  addEmployee,
  deleteEmployee,
  updateEmployee,
};
