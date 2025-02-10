import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 px-6"
    >
      <title>Accueil - Le Coin Lecture</title>
      
      {/* Titre principal */}
      <motion.h1
        className="text-5xl font-extrabold text-blue-700 text-center drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Bienvenue sur Le Coin Lecture 📖
      </motion.h1>
      
      {/* Description */}
      <motion.p
        className="text-gray-700 text-lg mt-4 text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Découvrez un large choix de livres et plongez dans un univers fascinant. Que vous soyez passionné par la littérature, la science-fiction ou le développement personnel, vous trouverez ici votre prochain coup de cœur !
      </motion.p>
      
      {/* Bouton d'exploration */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link
          to="/books"
          className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg text-xl font-semibold transition transform hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl"
        >
          Explorer les livres
        </Link>
      </motion.div>
      
      {/* Citation inspirante */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <p className="text-gray-600 text-xl italic">"Un livre est un ami qui ne vous trahit jamais."</p>
      </motion.div>
    </motion.div>
  );
};

export default Home;



