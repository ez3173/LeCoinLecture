import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { getBooks } from "../services/bookService";
import { Book } from "../types/Book";

const booksPerPage = 30;

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("tolkien");
  const [pendingSearchTerm, setPendingSearchTerm] = useState<string>("tolkien");
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    document.title = searchTerm ? `Recherche: ${searchTerm} - Le Coin Lecture` : "Le Coin Lecture";
  }, [searchTerm]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const data = await getBooks(searchTerm);
      if (data.docs) {
        setBooks(data.docs);
        setTotalPages(Math.ceil(data.numFound / booksPerPage));
      } else {
        setBooks([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des livres:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchBooks();
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm, currentPage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 px-6 py-8"
    >
      <h1 className="text-5xl font-extrabold text-center text-blue-700">📚 Le Coin Lecture</h1>
      
      {/* Barre de recherche pour trouver des livres */}
      <div className="flex justify-center mt-6 space-x-4">
        <input
          type="text"
          placeholder="Rechercher un livre..."
          value={pendingSearchTerm}
          onChange={(e) => setPendingSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTerm(pendingSearchTerm);
              setCurrentPage(1);
            }
          }}
          className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            setSearchTerm(pendingSearchTerm);
            setCurrentPage(1);
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-800 transition"
        >
          Rechercher
        </button>
      </div>

      {loading && <p className="text-center text-gray-700 mt-6">Chargement des livres...</p>}

      {/* Affichage des résultats sous forme de cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {books.length > 0 ? (
          books.map((book) => (
            <motion.div
              key={book.key}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                  className="w-full h-60 object-cover"
                />
              ) : (
                <div className="w-full h-60 flex items-center justify-center bg-gray-300">
                  📖 Aucune image
                </div>
              )}

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                <p className="text-gray-600 text-sm">Auteur(s) : {book.author_name?.join(", ") || "Inconnu"}</p>
                <p className="text-gray-500 text-sm">📅 Année : {book.first_publish_year || "Inconnue"}</p>
                <p className="text-gray-500 text-sm">📖 Éditions : {book.edition_count}</p>
                
                <Link 
                  to={`/books/${encodeURIComponent(book.key.replace("/works/", ""))}`} 
                  className="text-blue-600 mt-4 block hover:underline"
                >
                  📖 Voir plus
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">Aucun livre trouvé.</p>
        )}
      </div>

      {/* Pagination pour naviguer entre les pages */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </motion.div>
  );
};

export default Books;







