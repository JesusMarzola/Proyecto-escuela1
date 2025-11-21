import axios from "axios";

const API = "http://localhost:8000/users";

export default {
  getUsers() {
    return axios.get(API);
  }
};
