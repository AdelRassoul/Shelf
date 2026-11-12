import '../styles/Home.css';
import homeBg from '../assets/Home.jpg';

function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-content">
        <h1>Welcome to Shelf</h1>
        <p>Your online bookstore</p>
      </div>
    </div>
  );
}

export default Home;