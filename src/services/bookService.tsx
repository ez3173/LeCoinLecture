import axios from "axios";

// const pour récupérer les APis
const API_URL = "https://openlibrary.org/search.json";
const BOOK_DETAILS_URL = "https://openlibrary.org/works/";

// Fonction pour récupérer les livres en fonction d'une requête
export const getBooks = async (query: string, page: number = 1, limit: number = 30) => {
  
  try {
    const offset = (page - 1)*limit;
    const response = await axios.get(`${API_URL}?q=${query}&limit=${limit}&page=${page}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des livres:", error);
    throw error;
  }
};

// Fonction pour récupérer les détails d'un livre spécifique à partir de son ID dans ce cas si pour la description
export const getBookDetails = async (bookId: string) => {
  try {
    const response = await axios.get(`${BOOK_DETAILS_URL}${bookId}.json`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des détails du livre:", error);
    throw error;
  }
};

