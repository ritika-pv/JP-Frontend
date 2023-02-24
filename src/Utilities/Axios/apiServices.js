import axios from "axios";
const baseURL = 'https://some-domain.com/api/';


const apiInstance = axios.create({
    baseURL: baseURL ,
})

export default  apiInstance;