import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  timeout: 2000
});

export default api;