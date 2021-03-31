import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://61dac5c5bf58.ngrok.io",
  // headers: { "Content-Type": "application/json" },
});

export default apiClient;
