import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThemeSelector.css';

const themes = [
  {
    name: 'Light Mode',
    value: 'light',
    emoji: '🌞',
    image: 'https://market-resized.envatousercontent.com/themeforest.net/files/247663049/preview.__large_preview.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=5a69c34237070efd2646f5f6e161a1e7880a917bd83f87c9cfc66bda3088aa07'
  },
  {
    name: 'Dark Mode',
    value: 'dark',
    emoji: '🕶️',
    image: 'https://market-resized.envatousercontent.com/previews/files/233805322/preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=127de366c21ed6668f0cf8ef73658a1728488d8ad7d1aa87c27758947db62e44'
  },
  {
    name: 'Modern',
    value: 'modern',
    emoji: '✨',
    image: 'https://www.templateshub.net/uploads/1555561999%20ratsan.jpg'
  },
  {
    name: 'Classic',
    value: 'classic',
    emoji: '📜',
    image: 'https://marketplace.canva.com/EAE73xrFzcw/3/0/1600w/canva-design---graphic-design-portfolio-website-in-black-white-dark-classic-minimal-style-zXqE2GXsA7M.jpg'
  }
];

const ThemeSelector = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme.value);
    localStorage.setItem('selectedTheme', theme.value);
    navigate('/preview');
  };

  return (
    <div className="theme-page">
      <h2>🎨 Choose a Theme</h2>
      <div className="theme-grid">
        {themes.map((theme) => (
          <div
            key={theme.value}
            className={`theme-card ${selectedTheme === theme.value ? 'active' : ''}`}
            onClick={() => handleThemeClick(theme)}
          >
            <img src={theme.image} alt={theme.name} />
            <div className="theme-name">{theme.emoji} {theme.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
