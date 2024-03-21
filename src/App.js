import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavbarMain';
import Dashboard from  './components/Dashboard'
import UserPage from './components/UserPage';
import Offers from './components/Offers';
import Watched from './components/Watched';
import Footer from './components/Footer'


function App() {

  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'offers':
        return <Offers />;
      case 'me':
        return <UserPage />;
      case 'likes':
        return <Watched/>;
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <Navbar onSelectComponent={setSelectedComponent}/>
      {renderComponent()}
      <Footer/>
    </div>
  );
}

export default App;
