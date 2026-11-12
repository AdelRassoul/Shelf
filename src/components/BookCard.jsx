import { useState } from 'react';
import '../styles/BookCard.css';

function BookCard({ book, onMoreInfo, addToCart }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="book-card">
      {imageError ? (
        <div className="book-image-fallback">
          <span className="fallback-title">{book.title}</span>
        </div>
      ) : (
        <img
          src={book.image}
          alt={book.title}
          className="book-image"
          onError={() => setImageError(true)}
        />
      )}
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-price">${book.price}</p>
        <div className="book-actions">
          <button className="btn-more-info" onClick={() => onMoreInfo(book)}>
            More Info
          </button>
          <button className="btn-add-cart" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;