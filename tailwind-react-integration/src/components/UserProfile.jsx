function UserProfile() {
  return (
    <div
      className="user-profile bg-gray-100 mx-auto my-20 rounded-lg shadow-lg 
        user-profile-sm sm:user-profile-md md:user-profile-lg"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto 
            user-profile-img-sm sm:user-profile-img-md md:user-profile-img-lg"
      />
      <h1
        className="my-4 text-blue-800 
          user-profile-heading-sm sm:user-profile-heading-md md:user-profile-heading-lg"
      >
        John Doe
      </h1>
      <p
        className="text-gray-600 
          user-profile-paragraph-sm sm:user-profile-paragraph-md"
      >
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
