# Portfolio

🌐 **Live Site:** [www.simeonlama.dev](https://www.simeonlama.dev)

Personal portfolio website built with React and deployed on GitHub Pages.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SIMIIIIIII/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode

Start the development server:
```bash
npm start
```
The app will open at [http://localhost:3000](http://localhost:3000)

### Production Build

Create an optimized production build:
```bash
npm run build
```

## Deployment

This project is configured for GitHub Pages deployment.

To deploy:
```bash
npm run deploy
```

The site is available at: [www.simeonlama.dev](https://www.simeonlama.dev)

## Project Structure

```
portfolio/
├── public/          # Static files
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/             # React source code
    ├── App.js
    ├── index.js
    ├── index.css
    ├── components/  # Reusable components
    │   ├── Button.js
    │   ├── Competences.js
    │   ├── Experience.js
    │   ├── Formations.js
    │   ├── Langues.js
    │   ├── Loisirs.js
    │   ├── Profil.js
    │   └── SendMessage.js
    ├── menus/       # Page components
    │   ├── About.js
    │   ├── Contact.js
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── Home.js
    │   └── Projects.js
    ├── images/
    └── files/
```

## Features

- Portfolio website with CV format
- Responsive design
- Contact information display
- Project showcase
- About section

## Technologies Used

- React 19
- React Router DOM
- React Icons
- Validator (for form validation)
- GitHub Pages (hosting)

## Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages