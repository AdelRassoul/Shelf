import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ActivePageContext } from './context/ActivePageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('/');

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ActivePageContext.Provider>
  );
}

export default App;