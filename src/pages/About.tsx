import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 text-center"
    >
      <h1 className="text-4xl font-bold text-blue-600">À propos de nous</h1>
      <p className="text-gray-700 text-lg mt-4 max-w-2xl">
        Le Coin Lecture est une plateforme dédiée aux amoureux des livres. 
        Nous vous aidons à découvrir de nouveaux ouvrages et à plonger dans des univers fascinants. 
        Notre objectif est de rendre la lecture accessible à tous en facilitant la recherche et l'exploration de nouveaux titres.
      </p>
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition">
          En savoir plus
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition">
          Nous contacter
        </button>
      </div>
    </motion.div>
  );
};

export default About;
