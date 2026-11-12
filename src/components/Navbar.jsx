import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActivePageContext } from '../context/ActivePageContext';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activePage, setActivePage } = useContext(ActivePageContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (path) => {
    setActivePage(path);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={() => handleLinkClick('/')}>Shelf</Link>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className={activePage === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</Link></li>
        <li><Link to="/browse" className={activePage === '/browse' ? 'active' : ''} onClick={() => handleLinkClick('/browse')}>Browse</Link></li>
        <li><Link to="/cart" className={activePage === '/cart' ? 'active' : ''} onClick={() => handleLinkClick('/cart')}>Cart</Link></li>
        <li><Link to="/about" className={activePage === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>About</Link></li>
        <li><Link to="/contact" className={activePage === '/contact' ? 'active' : ''} onClick={() => handleLinkClick('/contact')}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;