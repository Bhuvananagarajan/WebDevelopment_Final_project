import React, { useRef, useState } from 'react';
import './MarkdownInput.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MarkdownInput = ({ markdown, onMarkdownChange, onProfileChange }) => {
  const fileInput = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleMdUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !file.name.endsWith('.md')) {
      toast.error('Please upload a valid .md file');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      onMarkdownChange(reader.result);
      toast.success(`📄 Loaded: ${file.name}`);
    };
    reader.readAsText(file);
  };

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onProfileChange(reader.result); // base64 only
      toast.success(`🖼️ Profile image uploaded: ${file.name}`);
      navigate('/themes'); // go to theme selection
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (!file || !file.name.endsWith('.md')) {
      toast.error('Only .md files are supported for drag & drop');
      return;
    }
    handleMdUpload({ target: { files: [file] } });
  };

  return (
    <div
      className={`md-input ${isDragging ? 'drag-over' : ''}`}
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
    >
      <textarea
        value={markdown}
        onChange={(e) => onMarkdownChange(e.target.value)}
        placeholder="✍️ Paste or type your markdown here..."
        rows={12}
      />
      <div className="inputs">
        <label>
          📄 Upload Markdown (.md):
          <input type="file" accept=".md" onChange={handleMdUpload} />
        </label>
        <label>
          🖼️ Upload Profile Image:
          <input type="file" accept="image/*" onChange={handleProfileUpload} />
        </label>
      </div>
      <p className="hint">💡 Drag and drop your `.md` file into this area!</p>
    </div>
  );
};

export default MarkdownInput;
