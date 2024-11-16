import axios from 'axios';

const API = axios.create({
    baseURL: '/api',
});

export const sendMessage = (formData) => API.post('/contact', formData);
