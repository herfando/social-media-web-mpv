import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Register
export const Register = (data: {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}) => {
  return axios.post(`${API_URL}/auth/register`, data);
};

// Login
export const Login = (data: { email: string; password: string }) => {
  return axios.post(`${API_URL}/auth/login`, data);
};
