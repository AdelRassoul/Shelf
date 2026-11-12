import { useState } from 'react';
import BookOverlay from '../components/BookOverlay';
import '../styles/Cart.css';

function Cart({ cart, increaseQty, decreaseQty, removeFromCart, clearCart, showM }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    showM('Checkout completed successfully!');
    clearCart();
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <p className="cart-subtitle">Review your selections before checkout</p>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Browse our collection to find your next read.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>by {item.author}</p>
                  <p className="cart-item-price">${item.price} each</p>
                </div>

                <div className="cart-item-right">
                  <div className="quantity-controls">
                    <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                    <span className="qty-display">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <div className="cart-item-buttons">
                    <button className="more-info-btn" onClick={() => setSelectedBook(item)}>
                      More Info
                    </button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              Total:<span className="cart-total-amount">${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}

      {selectedBook && (
        <BookOverlay book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default Cart;