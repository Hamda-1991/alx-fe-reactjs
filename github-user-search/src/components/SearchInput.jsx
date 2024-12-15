// src/components/SearchInput.jsx
import { useState } from "react";
import { fetchGitHubUser } from "../services/api";

function SearchInput() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) {
      setError("Please enter a username to search.");
      return;
    }

    try {
      const data = await fetchGitHubUser(query);
      setUserData(data);
      setError("");
    } catch {
      setUserData(null);
      setError("User not found or API request failed.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "10px" }}
      />
      <button
        onClick={handleSearch}
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
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      {userData && (
        <div style={{ marginTop: "2rem" }}>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
