import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-12 mt-12 flex flex-col justify-center items-center">
      {/* Contenu du footer */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-3">
          <span className="text-4xl animate-bounce">📚</span>
          <h2 className="text-3xl font-extrabold tracking-widest">Le Coin Lecture</h2>
        </div>

        <nav className="mt-6">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition duration-300 transform hover:scale-105">Accueil</Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-yellow-400 transition duration-300 transform hover:scale-105">Livres</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition duration-300 transform hover:scale-105">À propos</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition duration-300 transform hover:scale-105">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Icones web */}
        <div className="flex justify-center items-center space-x-6 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-500 transition duration-300 transform hover:scale-125">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition duration-300 transform hover:scale-125">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-500 transition duration-300 transform hover:scale-125">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-700 transition duration-300 transform hover:scale-125">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-300 text-sm mt-8">
        © 2025 Le Coin Lecture - Projet étudiant à but non lucratif.
      </div>
    </footer>
  );
};

export default Footer;

