import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hotelogo-server.vercel.app',
    withCredentials: true , 
  });

const UseAxios = () => {
    return instance;
};

export default UseAxios;