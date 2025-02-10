import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="h-screen flex flex-col justify-center items-center bg-gray-100 px-6"
    >
      <title>Accueil - Le Coin Lecture</title>

      {/* Section avec l'image d'illustration */}
      <motion.div
        className="w-full max-w-lg mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://via.placeholder.com/800x400/0099CC/ffffff?text=Le+Coin+Lecture"
          alt="Livres"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Titre animé */}
      <motion.h1
        className="text-5xl font-extrabold text-blue-600 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Bienvenue sur Le Coin Lecture 📖
      </motion.h1>

      {/* Description de l'accueil */}
      <motion.p
        className="text-gray-700 text-lg mt-4 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Découvrez un large choix de livres et plongez dans un univers fascinant. Que vous soyez passionné par la littérature, la science-fiction ou le développement personnel, vous trouverez ici votre prochain coup de cœur !
      </motion.p>

      {/* Call-to-action (CTA) */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link
          to="/books"
          className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-md text-xl hover:bg-blue-700 transition"
        >
          Explorer les livres
        </Link>
      </motion.div>

      {/* Section supplémentaire avec des icônes ou un texte inspirant */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <p className="text-gray-600 text-xl">"Un livre est un ami qui ne vous trahit jamais."</p>
      </motion.div>
    </motion.div>
  );
};

export default Home;


