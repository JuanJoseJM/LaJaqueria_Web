import axios from 'axios';

const api = axios.create({


  //baseURL: 'https://lajaqueria-api-jmfd-ase2hebwf0azephw.westeurope-01.azurewebsites.net',
  baseURL: 'http://localhost:8080',
});

// Interceptor para agregar el token a cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;