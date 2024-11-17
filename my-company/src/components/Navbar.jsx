import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
