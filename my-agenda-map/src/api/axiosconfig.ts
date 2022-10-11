import axios from 'axios';

export const app = axios.create({
    baseURL: 'http://localhost:4002/api/',
    withCredentials: true
})