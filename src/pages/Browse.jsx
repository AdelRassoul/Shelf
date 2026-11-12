import { useState } from 'react';
import BookCard from '../components/BookCard';
import BookOverlay from '../components/BookOverlay';
import booksData from '../data/books.json';
import '../styles/Browse.css';

function Browse({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMoreInfo = (book) => {
    setSelectedBook(book);
  };

  const handleCloseOverlay = () => {
    setSelectedBook(null);
  };

  return (
    <div className="browse-container">
      <h1 className="browse-title">Browse Our Books</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onMoreInfo={handleMoreInfo} addToCart={addToCart} />
        ))}
      </div>

      {selectedBook && (
        <BookOverlay book={selectedBook} onClose={handleCloseOverlay} />
      )}
    </div>
  );
}

export default Browse;