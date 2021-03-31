import client from "./client";

const endPoint = "/send-data";

const getEmployee = () => client.get();

const addEmployee = (employeeInfo) => {
  const data = new FormData();
  data.append("name", employeeInfo.name);
  data.append("email", employeeInfo.email);
  data.append("phone", employeeInfo.phone);
  data.append("salary", employeeInfo.salary);
  data.append("profession", employeeInfo.profession);
  data.append("picture", {
    name: `image.${employeeInfo.picture.split(".")[1]}`,
    type: "image/jepg",
    uri: employeeInfo.picture,
  });
  // data.append("upload_preset", "employeeApp");
  // data.append("cloud_name", "dy9pp33hg");

  return client.post(endPoint, data);
  // apiClient.post("/image/upload", data);
};

export default {
  getEmployee,
  addEmployee,
};
