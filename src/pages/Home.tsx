import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col justify-center items-center bg-gray-100 px-6"
    >
      <title>Accueil - Le Coin Lecture</title>
    
      <h1 className="text-5xl font-bold text-blue-600">Bienvenue sur Le Coin Lecture 📖</h1>
      <p className="text-gray-700 text-lg mt-4">
        Découvrez un large choix de livres et plongez dans un univers fascinant !
      </p>
      <Link
        to="/books"
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Explorer les livres
      </Link>
    </motion.div>
  );
};

export default Home;

