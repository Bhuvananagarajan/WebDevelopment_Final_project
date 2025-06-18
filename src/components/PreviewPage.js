import React, { useEffect, useState } from 'react';
import './PreviewPage.css';
import { parseMarkdown } from '../utils/markdownParser';
import { QRCodeCanvas } from 'qrcode.react';

const PreviewPage = ({ markdown, profileImage }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const html = parseMarkdown(markdown || '## Your Markdown\nStart typing to preview.');

  return (
    <div className={`preview-page ${theme}`}>
      {theme === 'dark' ? (
        // 🌑 Dark Theme
        <div className="dark-grid-layout">
          <div className="profile-section">
            {profileImage && (
              <img
                src={profileImage.content || profileImage}
                alt="Profile"
                className="profile-img-large"
              />
            )}
            <p className="profile-quote">"Striving to learn, build, and create every day."</p>
            <div className="qr-container">
              <p>🔍</p>
              <QRCodeCanvas value={window.location.href} size={100} />
            </div>
            <div className="contact-emojis">
              <span>📧</span>
              <span>📱</span>
              <span>🔗</span>
              <span>💼</span>
            </div>
          </div>
          <div className="markdown-grid-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      ) : theme === 'classic' ? (
        // 🧾 Classic Theme
        <div className="classic-layout">
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="profile-section">
            {profileImage && (
              <img
                src={profileImage.content || profileImage}
                alt="Profile"
                className="profile-img-large"
              />
            )}
            <p className="profile-quote">"Striving to learn, build, and create every day."</p>
            <div className="qr-container">
              <p>🔍</p>
              <QRCodeCanvas value={window.location.href} size={100} />
            </div>
            <div className="contact-emojis">
              <span>📧</span>
              <span>📱</span>
              <span>🔗</span>
              <span>💼</span>
            </div>
          </div>
        </div>
      ) : theme === 'modern' ? (
        // ✨ Modern Theme
        <div className="preview-page modern">
          <div className="modern-container">
            <div className="modern-profile-section">
              {profileImage && (
                <img
                  src={profileImage.content || profileImage}
                  alt="Profile"
                  className="modern-profile-img"
                />
              )}
              <p className="profile-quote">"Striving to learn, build, and create every day."</p>
              <div className="qr-container">
                <QRCodeCanvas value={window.location.href} size={100} />
              </div>
              <div className="contact-emojis">
                <span>📧</span>
                <span>📱</span>
                <span>🔗</span>
                <span>💼</span>
              </div>
            </div>
            <div className="modern-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      ) : (
        // 🌞 Light Theme (Default)
        <div className="preview-container">
          {profileImage && (
            <div className="profile-section">
              <img
                src={profileImage.content || profileImage}
                alt="Profile"
                className={`profile-img-large ${theme === 'dark' ? 'dark-profile' : 'light-profile'}`}
              />
              <h2 className="profile-name">"Striving to learn, build, and create every day."</h2>
            </div>
          )}
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
