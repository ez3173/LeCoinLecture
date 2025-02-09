import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Le Coin Lecture 📚
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">Accueil</Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-gray-200 transition">Livres</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition">À propos</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
