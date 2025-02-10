import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold hover:scale-105 transition-transform">
          Le Coin Lecture 📚
        </Link>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">Accueil</Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">Livres</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">À propos</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

