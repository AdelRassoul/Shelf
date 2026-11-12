import '../styles/BookOverlay.css';

function BookOverlay({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="overlay-backdrop" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="overlay-close" onClick={onClose}>×</button>
        
        <div className="overlay-body">
          <div className="overlay-image-container">
            <img src={book.image} alt={book.title} className="overlay-image" />
          </div>
          
          <div className="overlay-info">
            <h2 className="overlay-title">{book.title}</h2>
            <p className="overlay-author">by {book.author}</p>
            <p className="overlay-price">${book.price}</p>
            <p className="overlay-description">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookOverlay;