// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState(""); // State for the input value
  const [location, setLocation] = useState(""); // State for location filter
  const [minRepos, setMinRepos] = useState(""); // State for minimum repositories filter
  const [userData, setUserData] = useState([]); // State for the fetched user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(""); // State for error message

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (!query) return;

    setLoading(true); // Set loading to true when starting API call
    setError(""); // Clear any previous error messages

    try {
      const data = await fetchUserData(query, location, minRepos); // Fetch data with filters
      setUserData(data); // Set user data on success
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false); // Set loading to false once the request is completed
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state on input change
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)} // Update location state
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)} // Update minRepos state
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Search
        </button>
      </form>
      {loading && <p className="text-center mt-4">Loading...</p>}{" "}
      {/* Show loading text */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}{" "}
      {/* Show error message */}
      <div className="mt-8">
        {userData.length > 0 ? (
          userData.map((user) => (
            <div
              key={user.login}
              className="border p-4 mb-4 rounded-md shadow-md"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">
                {user.name || "No Name"}
              </h2>
              <p className="text-gray-600">Username: {user.login}</p>
              <p className="text-gray-600">
                Location: {user.location || "N/A"}
              </p>
              <p className="text-gray-600">Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View GitHub Profile
              </a>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
