import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust if your backend runs on another port

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { cus_email: email, cus_password: password }, { withCredentials: true });
    return response.data; // Should return the JWT token or session data
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const registerUser = async (email: string, username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { cus_email: email, cus_username: username, cus_password: password });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
