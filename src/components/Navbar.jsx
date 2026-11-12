import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActivePageContext } from '../context/ActivePageContext';
import '../styles/Navbar.css';

function Navbar({ cartCount }) {
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

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className={activePage === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</Link></li>
        <li><Link to="/browse" className={activePage === '/browse' ? 'active' : ''} onClick={() => handleLinkClick('/browse')}>Browse</Link></li>
        <li>
          <Link to="/cart" className={activePage === '/cart' ? 'active' : ''} onClick={() => handleLinkClick('/cart')}>
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li><Link to="/about" className={activePage === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>About Us</Link></li>
        <li><Link to="/contact" className={activePage === '/contact' ? 'active' : ''} onClick={() => handleLinkClick('/contact')}>Contact Us</Link></li>
      </ul>

      <div className="navbar-right">
        <Link to="/cart" className="mobile-cart" onClick={() => handleLinkClick('/cart')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && <span className="mobile-cart-badge">{cartCount}</span>}
        </Link>

        <div className="bookshelf-menu" onClick={toggleMenu}>
          <div className="books">
            <span className="book book-1"></span>
            <span className="book book-2"></span>
            <span className="book book-3"></span>
          </div>
          <div className="shelf"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;