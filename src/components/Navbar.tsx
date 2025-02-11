import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Fonction pour gérer le clic sur le menu burger
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Bloque le défilement de la page lorsque le menu burger est ouvert
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true); 
    } else {
      setIsSticky(false);
    }
  };
  // Gestion du défilement de la page
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"; 
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.overflow = "auto"; 
      window.removeEventListener("scroll", handleScroll); 
    };
  }, [isMenuOpen]); 

  return (
    <nav className={`bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg ${isSticky ? "fixed top-0 left-0 w-full z-50" : "sticky top-0 z-50"}`}>
      <div className="container mx-auto flex justify-between items-center p-6 relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wider flex items-center space-x-3">
          <span className="text-4xl animate-bounce">📚</span>
          <span>Le Coin Lecture</span>
        </Link>

        {/* Menu Burger */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Menu PC */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          {[ 
            { to: "/", label: "Accueil" },
            { to: "/books", label: "Livres" },
            { to: "/about", label: "À propos" },
            { to: "/contact", label: "Contact" }
          ].map(({ to, label }) => (
            <Link key={to} to={to} className="hover:text-gray-200 transition duration-300 transform hover:scale-105">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg font-semibold z-50">
          {[ 
            { to: "/", label: "Accueil" },
            { to: "/books", label: "Livres" },
            { to: "/about", label: "À propos" },
            { to: "/contact", label: "Contact" }
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105"
            >
              {label}
            </Link>
          ))}
          <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl mt-6">
            ✖
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
