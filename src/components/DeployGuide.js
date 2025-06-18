import React, { useState } from 'react';
import './DeployGuide.css';

const DeployGuide = () => {
  const [activeGuide, setActiveGuide] = useState(null);

  const renderGuide = () => {
    const handleBack = () => setActiveGuide(null);

    if (activeGuide === 'react') {
      return (
        <div className="deploy-guide">
          <button className="back-btn" onClick={handleBack}>← Back</button>
          <h1>🚀 Deploy Your React Portfolio to GitHub Pages</h1>
          <p className="intro">✨ Follow these steps to take your project live on the internet!</p>

          <div className="step">
            <span className="icon">🔗</span>
            <div className="text">
              <strong>Step 1: Create a GitHub Repository</strong><br />
              👉 <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">https://github.com/new</a>
            </div>
          </div>

          <div className="step">
            <span className="icon">📦</span>
            <div className="text">
              <strong>Step 2: Install gh-pages</strong><br />
              <code>npm install gh-pages --save-dev</code>
            </div>
          </div>

          <div className="step">
            <span className="icon">📁</span>
            <div className="text">
              <strong>Step 3: Add homepage to <code>package.json</code></strong><br />
              <code>"homepage": "https://your-username.github.io/your-repo-name"</code>
            </div>
          </div>

          <div className="step">
            <span className="icon">⚙️</span>
            <div className="text">
              <strong>Step 4: Add deploy scripts to <code>package.json</code></strong><br />
              <code>"predeploy": "npm run build",</code><br />
              <code>"deploy": "gh-pages -d build"</code>
            </div>
          </div>

          <div className="step">
            <span className="icon">🧾</span>
            <div className="text">
              <strong>Step 5: Push your code to GitHub</strong><br />
              <code>git init</code><br />
              <code>git remote add origin https://github.com/your-username/your-repo-name.git</code><br />
              <code>git add .</code><br />
              <code>git commit -m "🎉 Initial commit"</code><br />
              <code>git push -u origin main</code>
            </div>
          </div>

          <div className="step">
            <span className="icon">🚢</span>
            <div className="text">
              <strong>Step 6: Deploy!</strong><br />
              <code>npm run deploy</code>
            </div>
          </div>

          <div className="step">
            <span className="icon">🌍</span>
            <div className="text">
              <strong>Step 7: Visit Your Website</strong><br />
              <code>https://your-username.github.io/your-repo-name</code>
            </div>
          </div>

          <div className="done-msg">
            🎉 You did it! Your React app is live and shareable. Go celebrate! 🥳
          </div>
        </div>
      );
    }

    if (activeGuide === 'portfolio') {
      return (
        <div className="deploy-guide">
          <button className="back-btn" onClick={handleBack}>← Back</button>
          <h1>🌐 Deploy Portfolio Website (HTML/CSS Only)</h1>
          <p className="intro">✨ Follow these steps to get your static portfolio live!</p>

          <div className="step">
            <span className="icon">📁</span>
            <div className="text">
              <strong>Step 1: Extract your zip file</strong><br />
              Unzip the folder containing your HTML/CSS files.
            </div>
          </div>

          <div className="step">
            <span className="icon">🌍</span>
            <div className="text">
              <strong>Step 2: Upload to GitHub</strong><br />
              - Create a new GitHub repo<br />
              - Upload all your extracted files
            </div>
          </div>

          <div className="step">
            <span className="icon">⚙️</span>
            <div className="text">
              <strong>Step 3: Go to GitHub Settings → Pages</strong><br />
              - Under "Source", choose the branch (usually <code>main</code>)<br />
              - Click "Save"
            </div>
          </div>

          <div className="step">
            <span className="icon">✅</span>
            <div className="text">
              <strong>Step 4: Done!</strong><br />
              GitHub will provide a link to your live portfolio 🎉
            </div>
          </div>

          <div className="done-msg">
            🚀 Your static website is now deployed! Share your link proudly! 🌟
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="landing">
      {!activeGuide && (
        <div className="intro-area">
          <h2 className="quote">"Striving to learn, build, and create every day."</h2>
          <div className="button-row">
            <button className="action-btn" onClick={() => setActiveGuide('react')}>Deploy React App</button>
            <button className="action-btn" onClick={() => setActiveGuide('portfolio')}>Get Portfolio Website</button>
          </div>
          <img
            className="banner-img"
            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/WebApplication.deploying-twitter.png?1436557933"
            alt="Banner"
          />
        </div>
      )}
      {renderGuide()}
    </div>
  );
};

export default DeployGuide;
