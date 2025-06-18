import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MarkdownInput from './components/MarkdownInput';
import ThemeSelector from './components/ThemeSelector';
import PreviewPage from './components/PreviewPage';
import DownloadButton from './components/DownloadButton';
import DeployGuide from './components/DeployGuide';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [theme, setTheme] = useState('themeLight');
  const [previewAfterTheme, setPreviewAfterTheme] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('session');
    if (saved) {
      const sess = JSON.parse(saved);
      setMarkdown(sess.markdown || '');
      setProfileImage(sess.profileImage || null);
      setTheme(sess.theme || 'themeLight');
      toast.success('Session restored!');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('session', JSON.stringify({ markdown, theme }));
  }, [markdown, theme]);

  const ProtectedRoute = ({ element }) => {
    if (!markdown) {
      toast.error("Please enter or upload Markdown first.");
      return <Navigate to="/input" />;
    }
    if (!theme) {
      toast.error("Please select a theme.");
      return <Navigate to="/themes" />;
    }
    return element;
  };

  const ThemeSelectorWrapper = () => {
    const navigate = useNavigate();
    const handleSelect = (selectedTheme) => {
      setTheme(selectedTheme);
      toast.success(`Theme "${selectedTheme}" selected!`);
      if (previewAfterTheme) {
        navigate('/preview');
        setPreviewAfterTheme(false);
      }
    };
    return <ThemeSelector theme={theme} onSelect={handleSelect} />;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/input"
          element={
            <MarkdownInput
              markdown={markdown}
              onMarkdownChange={setMarkdown}
              onProfileChange={setProfileImage}
            />
          }
        />
        <Route path="/themes" element={<ThemeSelectorWrapper />} />
        <Route
          path="/preview"
          element={
            <ProtectedRoute
              element={
                <PreviewPage
                  markdown={markdown}
                  profileImage={profileImage}
                  theme={theme} // 👉 Theme passed only to preview
                />
              }
            />
          }
        />
        <Route
          path="/download"
          element={
            <ProtectedRoute
              element={
                <DownloadButton
                  markdown={markdown}
                  profileImage={profileImage}
                  theme={theme}
                />
              }
            />
          }
        />
        <Route path="/deploy" element={<DeployGuide />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;
