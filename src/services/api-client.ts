import axios, { AxiosRequestConfig } from "axios";


export interface FetchData<T> {
  count: number;
  results: T[];
}


const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  
  params: {
    key: 'cf17945b38d64c9a82ca2a27c9e9dc75'
  }
});




class APIclient<T> {
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint = endpoint;
  }


  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchData<T>>(this.endpoint, config)
    .then(res => res.data)
  }

}


export default APIclient;