import axios from 'axios';
// para pegar o ip use o comando 'ipconfig'
export const ip = '192.168.100.5';

const api = axios.create({
  baseURL: `http://${ip}:3333`,
});

export default api;
