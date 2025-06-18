import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => (
  <div className="home">
    <div className="intro">
      <h1>Developer Portfolio Generator</h1>
      <p>Convert your Markdown resume into a live personal portfolio in minutes!</p>
      <div className="btn-group">
        <Link to="/input" className="btn">📄 Input Markdown</Link>
        <Link to="/themes" className="btn">🎨 Select Theme</Link>
        <Link to="/preview" className="btn">👁️ Live Preview</Link>
        <Link to="/download" className="btn">📥 Download ZIP</Link>
        <Link to="/deploy" className="btn">🚀 Deploy Guide</Link>
      </div>
    </div>

    <div className="preview-gallery">
      <h2>✨ Sample Theme Previews</h2>
      <div className="gallery-grid">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/alime-free-template.jpg.avif" alt="Preview 1" />
        <img src="https://www.unsell.design/wp-content/uploads/2021/03/f0bf373d-featured-image.jpg" alt="Preview 2" />
        <img src="https://img.freepik.com/free-vector/flat-design-colored-portfolio-template_23-2149215470.jpg?semt=ais_hybrid&w=740" alt="Preview 3" />
        <img src="https://img.freepik.com/free-vector/creative-gradient-portfolio-template_52683-79241.jpg" alt="Preview 4" />
      </div>
    </div>
  </div>
);

export default HomePage;
