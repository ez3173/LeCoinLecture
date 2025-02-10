import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-6 relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wider flex items-center space-x-3">
          <span className="text-4xl animate-bounce">📚</span>
          <span>Le Coin Lecture</span>
        </Link>

        {/* Menu burger  */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu principal  */}
        <div className={`hidden md:flex space-x-8 text-lg font-semibold ${isMenuOpen ? "hidden" : ""}`}>
          <Link to="/" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">
            Accueil
          </Link>
          <Link to="/books" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">
            Livres
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">
            À propos
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition duration-300 transform hover:scale-105">
            Contact
          </Link>
        </div>
      </div>

      {/* Menu burger */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 absolute top-0 left-0 right-0 bottom-0 z-10 rounded-b-lg transition-all duration-300 h-screen`}
      >
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={closeMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6 text-lg font-semibold">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105" onClick={closeMenu}>
            Accueil
          </Link>
          <Link to="/books" className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105" onClick={closeMenu}>
            Livres
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105" onClick={closeMenu}>
            À propos
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
