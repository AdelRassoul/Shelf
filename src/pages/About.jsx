import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Shelf</h1>
      <p className="about-subtitle">A place for readers, by readers</p>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Project Overview</h2>
          <p>
            Shelf is an online bookstore web application built as part of the 
            <strong> CSCI426 - Advanced Web Programming </strong> course.
          </p>
          <p>
            The goal of this project is to demonstrate proficiency in modern frontend 
            development, including component-based architecture, state management, 
            client-side routing, and responsive design.
          </p>
        </div>

        <div className="about-section">
          <h2>Technologies Used</h2>
          <ul>
            <li>React.js — UI Library</li>
            <li>React Router DOM — Client-side Routing</li>
            <li>CSS3 — Custom Styling & Responsive Design</li>
            <li>Web Storage API — Cart Persistence</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Key Features</h2>
          <ul>
            <li>Browse a catalog of books with real-time search</li>
            <li>View detailed book information in a modal overlay</li>
            <li>Add items to a shopping cart with quantity management</li>
            <li>Persistent cart data across page refreshes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;