import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://api.beeu.devg.com.br/api/v1/',
    baseURL: 'http://192.168.15.3:8000/api/v1/', 
    headers: { Authorization: `Bearer ${localStorage.getItem('auth._token.local')}` }
});

export default api;