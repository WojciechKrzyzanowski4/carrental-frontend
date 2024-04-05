
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarMain';
import Dashboard from  './components/Dashboard';
import Offers from './components/Offers';
import UserPage from './components/UserPage';
import Watched from './components/Watched';
import Footer from './components/Footer';
import Home from './components/Home';
import { SERVER_URL } from './components/utilComponents/constant';

function App() {

  const [user, setUser] = useState('ROLE_USER');

  const getUser = async() => {
    try {
      const response = await fetch(
          SERVER_URL + '/user',
          { method: 'GET', redirect: "follow", credentials:'include' }
      );
      if (response.redirected) {
          document.location = response.url;
          return;
      }
      if (!response.ok) {
          throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
        console.error('Error fetching cars:', error.message);
    }
  }

  useEffect(()=>{
    getUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          {user.role==="ROLE_ADMIN" && (<Route path="/dashboard" element={<Dashboard />} />)}
          <Route path="/offers" element={<Offers />} />
          {user && (<Route path="/me" element={<UserPage user={user} />} />)}
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
  <div className="pt-80 h-[100vh]">
    <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold leading-tight mb-4">404 Not Found</h1>
    <p className="text-lg md:text-xl text-center lg:text-2xl mb-4 ">The page You are looking for does not exist.</p>
  </div>
);

export default App;