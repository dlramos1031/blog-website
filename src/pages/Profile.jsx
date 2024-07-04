
const Profile = () => {
  // Replace with actual user data fetching logic
  const user = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    bio: 'This is John Doe\'s bio.',
    profilePicture: 'https://via.placeholder.com/150',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex items-center mb-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;
