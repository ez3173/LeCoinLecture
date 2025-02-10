import { useState, useEffect } from "react";
import { Book } from "../types/Book";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination"; // 🆕 Import du composant Pagination

const API_URL = "https://openlibrary.org/search.json";
const booksPerPage = 30; // Nombre de livres affichés par page

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("tolkien");
  const [pendingSearchTerm, setPendingSearchTerm] = useState<string>("tolkien");
  const [totalPages, setTotalPages] = useState<number>(1); // 🆕 Stocke le nombre total de pages

  const fetchBooks = async () => {
    setLoading(true);

    try {
      const url = `${API_URL}?q=${searchTerm}&page=${currentPage}&limit=${booksPerPage}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.docs) {
        setBooks(data.docs);
        setTotalPages(Math.ceil(data.numFound / booksPerPage)); // 🆕 Calcul du nombre total de pages
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
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">📚 Le Coin Lecture</h1>

      {/* Barre de recherche avec bouton */}
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
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Rechercher
        </button>
      </div>

      {/* Affichage du chargement */}
      {loading && <p className="text-center text-gray-700 mt-6">Chargement des livres...</p>}

      {/* Liste des livres */}
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
              {/* Image du livre */}
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

              {/* Infos du livre */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                <p className="text-gray-600 text-sm">Auteur(s) : {book.author_name?.join(", ") || "Inconnu"}</p>
                <p className="text-gray-500 text-sm">📅 Année : {book.first_publish_year || "Inconnue"}</p>
                <p className="text-gray-500 text-sm">📖 Éditions : {book.edition_count}</p>

                {/* Lien vers plus de détails */}
                <Link 
                to={`/books/${encodeURIComponent(book.key.replace("/works/", ""))}`} 
                className="text-blue-500 mt-4 block hover:underline">
                  📖 Voir plus
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">Aucun livre trouvé.</p>
        )}
      </div>

      {/* 🆕 Utilisation du composant Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Books;






