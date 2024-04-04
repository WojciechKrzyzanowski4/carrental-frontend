
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarMain';
import Dashboard from  './components/Dashboard';
import Offers from './components/Offers';
import UserPage from './components/UserPage';
import Watched from './components/Watched';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/me" element={<UserPage />} />
          <Route path="/likes" element={<Watched />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Define a NotFound component to handle unknown routes
const NotFound = () => (
  <div>
    <h2>404 Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default App;