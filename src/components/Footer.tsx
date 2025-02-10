import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">📚</span>
          <h2 className="text-2xl font-extrabold">Le Coin Lecture</h2>
        </div>

        {/* Menu de navigation */}
        <nav className="mt-6 md:mt-0">
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link to="/" className="hover:text-blue-400 transition duration-300">Accueil</Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-blue-400 transition duration-300">Livres</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition duration-300">À propos</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition duration-300">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Le Coin Lecture - Projet étudiant à but non lucratif.
      </div>
    </footer>
  );
};

export default Footer;

  