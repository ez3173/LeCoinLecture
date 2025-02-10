// src/pages/BookDetails.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../services/bookService';

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState<{ title: string, authors: string, description: string, first_publish_year: string, coverUrl: string | null } | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (bookId) {
        try {
          const data = await getBookDetails(bookId);
          setBookDetails(data);
        } catch (error) {
          console.error("Erreur lors du chargement des détails du livre", error);
        }
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!bookDetails) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="book-details">
      <h1>{bookDetails.title}</h1>
      <h2>Auteur: {bookDetails.authors}</h2>
      <p><strong>Publié en :</strong> {bookDetails.first_publish_year}</p>
      <p><strong>Description:</strong> {bookDetails.description}</p>
      {bookDetails.coverUrl && (
        <img src={bookDetails.coverUrl} alt={bookDetails.title} />
      )}
    </div>
  );
};

export default BookDetailsPage;






