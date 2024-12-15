// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (!query) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(query);
      setUserData(data);
    } catch {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
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
