import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch {
    throw new Error("User not found");
  }
};

export const fetchAdvancedSearchResults = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
    });
    return response.data.items; // The `items` array contains the list of users
  } catch {
    throw new Error("User not found");
  }
};



