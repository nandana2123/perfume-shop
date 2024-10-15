import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home'; // Assuming you have a HomePage
import Explore from './pages/Explore';
// Inside your <Routes>


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{ }
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;
