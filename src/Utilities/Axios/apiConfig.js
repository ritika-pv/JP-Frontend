import axios from "axios";
const baseURL = 'http://localhost:3002/api';


export const apiInstance = axios.create({
    baseURL: baseURL ,
})
