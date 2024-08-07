// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Peak Connect',
    description: 'App for people inside of niche hobbies to connect',
    imageUrl: '/path/to/project1-image.jpg',
    repoUrl: 'https://github.com/DallasGiles/Peak-Connect'
  },
  {
    title: 'Event Finder',
    description: 'Find events near you',
    imageUrl: '/path/to/project2-image.jpg',
    repoUrl: 'https://github.com/DallasGiles/event_management'
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;