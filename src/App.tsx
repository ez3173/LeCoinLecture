import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import BookDetails from "./pages/BookDetails";

const App = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col w-full">
        <Navbar />
        <ErrorBoundary>  
          <div className="flex-1 w-full container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:bookId" element={<BookDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </ErrorBoundary>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
