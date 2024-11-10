// src/components/UserProfile
import PropTypes from "prop-types";

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
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
