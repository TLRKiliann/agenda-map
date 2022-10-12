import axios from 'axios';

export const app = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-type": "application/json"
    }
});
