import axios from "axios";

const axiosBackend = axios.create({
  baseURL: "http://eb-backend-example-dev.us-west-2.elasticbeanstalk.com/api",
});

export default axiosBackend;
