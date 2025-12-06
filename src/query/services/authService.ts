// api/auth.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // ambil dari .env

// Register
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post(`${API_URL}/auth/register`, data);
  return res.data;
};

// Login
export const loginUser = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${API_URL}/auth/login`, data);
  return res.data;
};
