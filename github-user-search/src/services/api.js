// src/services/api.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
  const response = await axios.get(`${BASE_URL}/${username}`, { headers });
  return response.data;
};
