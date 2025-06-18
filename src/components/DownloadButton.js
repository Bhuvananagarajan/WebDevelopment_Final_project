import React from 'react';
import { generateZip } from '../utils/zipGenerator';
import { parseMarkdown } from '../utils/markdownParser';
import { toast } from 'react-toastify';
import './DownloadButton.css';

const DownloadButton = ({ markdown, profileImage, theme }) => {
  const handleZipDownload = async () => {
    try {
      const parsedHtml = parseMarkdown(markdown);
      const profileImgTag = profileImage
        ? `<img src="${profileImage}" alt="Profile" style="max-width: 150px; border-radius: 8px;"/><br/>`
        : '';

      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="theme.css">
          <title>My Portfolio</title>
        </head>
        <body>
          ${profileImgTag}
          ${parsedHtml}
        </body>
        </html>
      `;

      const cssFile = theme ? `themes/${theme}.css` : 'themes/themeLight.css';
      const css = await fetch(process.env.PUBLIC_URL + '/' + cssFile).then(res => res.text());

      await generateZip({ html, css, image: profileImage });
      toast.success('🎉 ZIP Downloaded with Image & Style!', { position: 'top-right' });
    } catch (error) {
      toast.error('❌ ZIP download failed!', { position: 'top-right' });
      console.error(error);
    }
  };

  const handleHtmlDownload = async () => {
    try {
      const parsedHtml = parseMarkdown(markdown);
      const profileImgTag = profileImage
        ? `<img src="${profileImage}" alt="Profile" style="max-width: 150px; border-radius: 8px;"/><br/>`
        : '';

      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="theme.css">
          <title>My Portfolio</title>
        </head>
        <body>
          ${profileImgTag}
          ${parsedHtml}
        </body>
        </html>
      `;

      const blob = new Blob([htmlContent], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'portfolio.html';
      link.click();
      toast.success('📄 HTML File Downloaded!', { position: 'top-right' });
    } catch (error) {
      toast.error('❌ HTML download failed!', { position: 'top-right' });
      console.error(error);
    }
  };

  return (
    <div className="download-container">
      <p className="quote">✨ “Design is intelligence made visible.” – Alina Wheeler</p>
      <button className="btn-download" onClick={handleZipDownload}>
        📦 Download as ZIP
      </button>
      <button className="btn-download html" onClick={handleHtmlDownload}>
        📄 Download as HTML
      </button>
    </div>
  );
};

export default DownloadButton;
