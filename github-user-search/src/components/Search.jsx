// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState(""); // State for the input value
  const [userData, setUserData] = useState(null); // State for the fetched user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(""); // State for error message

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (!query) return;

    setLoading(true); // Set loading to true when starting API call
    setError(""); // Clear any previous error messages
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(query); // Fetch data from API
      setUserData(data); // Set user data on success
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false); // Set loading to false once the request is completed
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state on input change
          style={{
            padding: "0.5rem",
            width: "300px",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}{" "}
      {/* Show loading text while fetching data */}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Show error message */}
      {userData && (
        <div
          style={{
            marginTop: "2rem",
            textAlign: "left",
            maxWidth: "400px",
            margin: "2rem auto",
          }}
        >
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h2>{userData.name || "No Name Provided"}</h2>
          <p>
            <strong>Username:</strong> {userData.login}
          </p>
          <p>
            <strong>Bio:</strong> {userData.bio || "No bio available"}
          </p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
