// src/components/Project.jsx
import React from 'react';

const Project = ({ title, description, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;