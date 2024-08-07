# Portfolio Website

This is my personal portfolio website built using React. It showcases my projects, skills, and resume. The website is responsive and looks great on both desktop and mobile devices.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This portfolio website is designed to display my skills, projects, and resume to potential employers and collaborators. It includes sections for About Me, Portfolio, Contact, and Resume.

## Features

- Responsive design for mobile and desktop views
- Display of projects with images, descriptions, and links to live sites and GitHub repositories
- Contact form with validation
- Downloadable resume in PDF format
- Clean and modern design

## Technologies Used

- React
- React Router
- HTML
- CSS
- JavaScript

## Setup

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio-website.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd portfolio-website
    ```
3. **Install the dependencies**:
    ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

Once the development server is running, you can view the website by navigating to `http://localhost:5173` in your web browser.

### Project Structure

```plaintext
portfolio-website/
│
├── public/
│   ├── resume.pdf            # Your resume PDF
│   └── ...                   # Other public assets
│
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Header component
│   │   ├── Footer.jsx        # Footer component
│   │   └── Project.jsx       # Project component
│   │
│   ├── pages/
│   │   ├── AboutMe.jsx       # About Me page
│   │   ├── Portfolio.jsx     # Portfolio page
│   │   ├── Contact.jsx       # Contact page
│   │   └── Resume.jsx        # Resume page
│   │
│   ├── App.jsx               # Main App component
│   └── index.jsx             # Entry point
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js