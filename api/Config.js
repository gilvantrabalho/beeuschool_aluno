import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.9:8000/api/v1/',
    headers: { Authorization: `Bearer ${localStorage.getItem('auth._token.local')}` }
});

export default api;