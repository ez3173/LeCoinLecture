// src/services/bookService.ts
import axios from 'axios';

const API_URL = "https://openlibrary.org/search.json";

// Recherche des livres par un mot-clé
export const getBooks = async (query: string, page: number = 1) => {
  try {
    const response = await axios.get(`${API_URL}?q=${query}&page=${page}`);
    return response.data.docs;
  } catch (error) {
    console.error("Erreur lors de la récupération des livres:", error);
    throw error;
  }
};

// Récupération des détails d'un livre par son ID
export const getBookDetails = async (bookId: string) => {
  try {
    const response = await axios.get(`https://openlibrary.org/works/${bookId}.json`);
    const data = response.data;

    return {
      title: data.title || 'Titre non disponible',
      authors: data.authors ? data.authors.map((author: { name: string }) => author.name).join(', ') : 'Auteur inconnu',
      description: data.description ? (typeof data.description === 'string' ? data.description : data.description.value) : 'Description non disponible',
      first_publish_year: data.first_publish_year || 'Année non disponible',
      coverUrl: data.covers ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg` : null,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des détails du livre:", error);
    throw error;
  }
};
