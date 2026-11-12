import { useState, useContext } from 'react';
import { ActivePageContext } from '../context/ActivePageContext';
import BookCard from '../components/BookCard';
import booksData from '../data/books.json';
import '../styles/Browse.css';

function Browse() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Browse;