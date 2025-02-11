import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  // constante pour stocker les valeurs du formulaire (nom, email, message)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formulaire facultatif pour l'instant
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-gray-100 px-6 text-center"
    >
      <title>Contact-LeCoinLecture</title> 
      
      <h1 className="text-5xl font-extrabold text-blue-700">Contactez-nous</h1>
      
      <p className="text-gray-700 text-lg mt-4 max-w-2xl">
        Une question ? Une suggestion ? N’hésitez pas à nous contacter en remplissant le formulaire ci-dessous.
      </p>
      
      
      <form onSubmit={handleSubmit} className="mt-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre email"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre message"
            rows={4}
            required
          ></textarea>
        </div>

        
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition w-full"
        >
          Envoyer
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
