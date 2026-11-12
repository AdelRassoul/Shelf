import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import BookOverlay from '../components/BookOverlay';
import booksData from '../data/books.json';
import '../styles/Browse.css';

const BOOKS_PER_PAGE = 12;

function Browse({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + BOOKS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="browse-container">
      <h1 className="browse-title">Our Collection</h1>
      <p className="browse-subtitle">Discover timeless stories and literary treasures</p>

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
        {currentBooks.length === 0 ? (
          <p className="no-results">No books found matching "{searchTerm}"</p>
        ) : (
          currentBooks.map((book) => (
            <BookCard key={book.id} book={book} onMoreInfo={setSelectedBook} addToCart={addToCart} />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          <span className="pagination-info">Page {currentPage} of {totalPages}</span>
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}

      {selectedBook && (
        <BookOverlay book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default Browse;