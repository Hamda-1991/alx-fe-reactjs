// src/components/UserProfile
import PropTypes from "prop-types";

const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

// Define prop types for validation
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // name is a required string
  age: PropTypes.string.isRequired, // age is a required string
  bio: PropTypes.string.isRequired, // bio is a required string
};

export default UserProfile;
