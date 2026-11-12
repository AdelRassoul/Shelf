import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ActivePageContext } from './context/ActivePageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Cart from './pages/Cart';
import About from './pages/About';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('/');
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const showM = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  const addToCart = (book) => {
    const existing = cart.find(item => item.id === book.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
      showM('Quantity increased!');
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
      showM('Added to cart!');
    }
  };

  const increaseQty = (bookId) => {
    setCart(cart.map(item =>
      item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (bookId) => {
    setCart(cart.map(item => {
      if (item.id === bookId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return null;
      }
      return item;
    }).filter(item => item !== null));
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter(item => item.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      <Router>
        <div className="app-container">
          <Navbar cartCount={cartCount} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse addToCart={addToCart} />} />
              <Route path="/cart" element={
                <Cart
                  cart={cart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  showM={showM}
                />
              } />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />

          {message && <div className="message">{message}</div>}
        </div>
      </Router>
    </ActivePageContext.Provider>
  );
}

export default App;