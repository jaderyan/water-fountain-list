import axios from "axios";

export default axios.create({
  baseURL: `https://api.sheety.co/eb6bc964-ee12-444a-b173-0f5b8d3f9e75`,
  headers: {
    "Content-Type": "application/json"
  }
});
