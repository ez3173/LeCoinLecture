import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../services/bookService";
import { motion } from "framer-motion";
import { Book } from "../types/Book";

const BookDetails = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [bookDetails, setBookDetails] = useState<Book | null>(null);

  // Récupération des détails du livre
  useEffect(() => {
    if (bookId) {
      const fetchBookDetails = async () => {
        try {
          const bookData = await getBookDetails(bookId);
          setBookDetails({
            key: bookData.key,
            title: bookData.title,
            author_name: bookData.authors?.map((author: { name: string }) => author.name).join(", ") || "Auteur inconnu",
            first_publish_year: bookData.first_publish_year || "Date inconnue",
            edition_count: bookData.edition_count || 0,
            cover_i: bookData.covers?.[0] || 0,
            description:
              typeof bookData.description === "string" ? bookData.description : bookData.description?.value || "Pas de description disponible",
          });
          
          
          document.title = `${bookData.title} - Le Coin Lecture`;
        } catch (error) {
          console.error("Erreur lors de la récupération des détails du livre:", error);
        }
      };

      fetchBookDetails();
    }
  }, [bookId]);

  if (!bookDetails) {
    return <div className="text-center text-gray-600 mt-10">Chargement...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12"
    >
      <div className="flex flex-col md:flex-row">
        {/* Affichage de l'image du livre */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3">
          {bookDetails.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-L.jpg`}
              alt={bookDetails.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-60 flex items-center justify-center bg-gray-300 text-gray-700 text-lg">
              📖 Aucune image
            </div>
          )}
        </div>

        {/* Informations sur le livre */}
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-3xl font-semibold text-blue-600">{bookDetails.title}</h1>
          <p className="text-lg text-gray-700 mt-2">Par {bookDetails.author_name}</p>
          <p className="text-sm text-gray-500 mt-1">Publié en: {bookDetails.first_publish_year}</p>
          <p className="text-sm text-gray-500 mt-1">Éditions disponibles: {bookDetails.edition_count}</p>
          <p className="text-gray-700 mt-6">{bookDetails.description}</p>
          <div className="mt-6">
            <a 
              href={`https://openlibrary.org/works/${bookId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Voir plus sur Open Library
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookDetails;









