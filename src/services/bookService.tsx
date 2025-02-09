// src/services/bookService.ts
import axios from 'axios';

// URL de base de l'API Open Library
const API_URL = "https://openlibrary.org/search.json";

export const getBooks = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}?q=${query}`);
    console.log('Réponse API:', response.data); // Affiche la réponse de l'API dans la console
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des livres:", error);
    throw error;
  }
};
