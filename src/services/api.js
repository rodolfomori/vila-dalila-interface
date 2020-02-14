import axios from 'axios';

const api = axios.create({
  baseURL: 'api.viladalila.site:3001',
});

export default api;
