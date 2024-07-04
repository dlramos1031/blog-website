import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Blog Platform
        </Link>
        <div className="flex space-x-4">
          <Link to="/create-post" className="text-white">
            Create Post
          </Link>
          <Link to="/profile" className="text-white">
            Profile
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
