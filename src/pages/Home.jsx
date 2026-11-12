import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActivePageContext } from '../context/ActivePageContext';
import '../styles/Home.css';
import homeBg from '../assets/Home.jpg';

function Home() {
  const { setActivePage } = useContext(ActivePageContext);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-content">
        <h1>Welcome to Shelf</h1>
        <p>Your online bookstore</p>
        <Link to="/browse" className="browse-btn" onClick={() => setActivePage('/browse')}>
          Browse Books
        </Link>
      </div>
    </div>
  );
}

export default Home;