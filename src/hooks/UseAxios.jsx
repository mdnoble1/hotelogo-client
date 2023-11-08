import axios from "axios";

const instance = axios.create({
    baseURL: 'https://b8a11-server-side-mdnoble1.vercel.app/api/v1',
    withCredentials: true , 
  });

const UseAxios = () => {
    return instance;
};

export default UseAxios;