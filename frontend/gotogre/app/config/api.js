import axios from 'axios';

const api = axios.create({
 // baseURL: process.env.REACT_APP_API_URL + "/api/",
 baseURL:"https://gotogre-dev.azurewebsites.net/api/",
});

export default api;