import axios from 'axios';

const api = axios.create({
  // baseURL: 'api.viladalila.online:3001',
  baseURL: 'https://go5ousnc8i.execute-api.us-east-1.amazonaws.com/Production',
});

export default api;
