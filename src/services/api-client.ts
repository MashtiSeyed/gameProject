import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '457bc6ca23cd4490939fc4826658d344'
  }
});



