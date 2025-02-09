import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 text-center"
    >
        <title>Contactez-nous - Le Coin Lecture</title>
      <h1 className="text-4xl font-bold text-blue-600">Contactez-nous</h1>
      <p className="text-gray-700 text-lg mt-4 max-w-2xl">
        Une question ? Une suggestion ? N’hésitez pas à nous contacter en remplissant le formulaire ci-dessous.
      </p>
      
      <form className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Nom</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre nom"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre message"
            rows={4}
          ></textarea>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition w-full">
          Envoyer
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
