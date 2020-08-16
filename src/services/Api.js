import axios from "axios";
import config from "../config";

export default () => {
  let inst = axios.create({
    baseURL: config.apiUrl
  });

  return inst;
};
