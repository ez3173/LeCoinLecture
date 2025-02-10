import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 text-center">
      <title>404 - Page non trouvée</title>
      <h1 className="text-9xl font-bold text-white drop-shadow-lg animate-pulse">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-white drop-shadow-md">
        Oups ! La page n'existe pas.
      </h2>
      <p className="text-lg text-white mt-4 max-w-md mx-auto">
        Désolé, la page que vous recherchez n'est pas disponible. Elle a peut-être été déplacée ou supprimée.
      </p>
      <Link
        to="/"
        className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transform transition duration-300 hover:scale-105"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;

