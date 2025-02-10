import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-gray-100 px-6 text-center"
    >
      {/* Titre de la page */}
      <title>À propos - Le Coin Lecture</title>
      <motion.h1
        className="text-5xl font-extrabold text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        À propos de nous
      </motion.h1>
      
      {/* Description */}
      <motion.p
        className="text-gray-700 text-lg mt-4 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Le Coin Lecture est une plateforme dédiée aux amoureux des livres. 
        Nous vous aidons à découvrir de nouveaux ouvrages et à plonger dans des univers fascinants. 
        Notre objectif est de rendre la lecture accessible à tous en facilitant la recherche et l'exploration de nouveaux titres.
      </motion.p>
      
      {/* Boutons d'action */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
      
        <Link
          to="/contact"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-gray-800 transition"
        >
          Nous contacter
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default About;

