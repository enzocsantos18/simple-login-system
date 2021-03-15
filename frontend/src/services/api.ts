import axios from 'axios';
import Auth from '../helpers/auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
 
})

export default api;