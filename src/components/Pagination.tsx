import React from "react";

// Interface pour les props de Pagination
interface PaginationProps {
  currentPage: number;   
  totalPages: number;    
  onPageChange: (newPage: number) => void;  
}

// Composant Pagination
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {/* Bouton Précédent */}
      <button
        onClick={() => onPageChange(currentPage - 1)}  
        disabled={currentPage === 1} 
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
      >
        ⬅ Précédent
      </button>

      {/* Affichage de la page actuelle et du total de pages */}
      <span className="px-6 py-2 bg-gray-200 text-gray-700 font-bold">
        Page {currentPage} / {totalPages}
      </span>

      {/* Bouton Suivant */}
      <button
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage >= totalPages}  
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
      >
        Suivant ➡
      </button>
    </div>
  );
};

export default Pagination;

