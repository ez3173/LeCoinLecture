import React, { Component, ErrorInfo } from "react";

// interface Indicateur pour savoir si une erreur a été capturée
interface State {
  hasError: boolean;  
}

//  composant ErrorBoundary qui intercepte les erreurs 
class ErrorBoundary extends Component<{ children?: React.ReactNode }, State> {
  constructor(props: { children?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };  
  }

  // Méthode statique appelée lorsqu'une erreur est capturée
  static getDerivedStateFromError(): State {
    return { hasError: true };  
  }

  // Méthode qui capte les erreurs et fournit des informations supplémentaires
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Erreur capturée:", error);
    console.error("Informations sur l'erreur:", errorInfo);
  }

  // Méthode recharger la page 
  handleReload = () => {
    window.location.reload();  
  };

  
  render() {
    
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-800">
              Oups! Une erreur s'est produite
            </h1>
            <p className="text-gray-600 mt-2">
              Il semble qu'un problème soit survenu. Essayez de recharger la
              page ou revenez plus tard.
            </p>
            <button
              onClick={this.handleReload}  // Déclenche le rechargement de la page
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    
    return this.props.children;
  }
}

export default ErrorBoundary;



