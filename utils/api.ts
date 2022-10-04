import axios from "axios";

const api = axios.create({
  baseURL : `http://${window.location.hostname}:8080/api`,
  timeout: 30000,
  headers: {
    "Content-Type" : 'application/json;charset=UTF-8',
    "Access-Control_Allow_Origin" : "*",
    "Accept" : "application/json",
  }
});

api.interceptors.request.use(
  function (config) {
    return config;
  }
)

api.interceptors.response.use(
  function (response){
    return response;
  }
);

export default api;