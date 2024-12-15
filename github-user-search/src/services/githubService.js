// src/services/githubService.js
import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";

// Fetch user data from GitHub API with advanced search parameters
export const fetchUserData = async (query, location = "", minRepos = "") => {
  let searchQuery = `${query}`;

  // Add location and minRepos to the query if provided
  if (location) searchQuery += `+location:${location}`;
  if (minRepos) searchQuery += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${GITHUB_API_URL}?q=${searchQuery}`);
    return response.data.items; // Return the list of users found
  } catch {
    throw new Error("User not found");
  }
};


