import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: 'cf17945b38d64c9a82ca2a27c9e9dc75'
  }
});



