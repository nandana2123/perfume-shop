import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home'; // Assuming you have a HomePage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/product/:id" element={<ProductPage />} /> {/* Route for individual product page */}
      </Routes>
    </Router>
  );
};

export default App;
