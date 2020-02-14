import axios from 'axios';

const api = axios.create({
  // baseURL: 'api.viladalila.site:3001',
  baseURL: 'https://45wlcu9f07.execute-api.us-east-1.amazonaws.com/Prod',
});

export default api;
