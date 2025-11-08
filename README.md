# Portfolio

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for database)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

## Configuration

Create a `.env` file in the `server` directory with the following variables:
```
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
```

## Running the Project

### Development Mode

1. Start the server (from the `server` directory):
```bash
npm run dev
```
This will start the server with nodemon on port 5000.

2. Start the client (from the `client` directory):
```bash
npm start
```
This will start the React development server on port 3000.

### Production Mode

1. Build the client:
```bash
cd client
npm run build
```

2. Start the server:
```bash
cd ../server
npm start
```

## Project Structure

```
portfolio/
├── client/          # React frontend
│   ├── public/      # Static files
│   └── src/         # React components and pages
│       ├── components/
│       ├── menus/
│       └── App.js
└── server/          # Express backend
    ├── models/      # MongoDB models
    ├── routes/      # API routes
    └── server.js
```

## Features

- Portfolio website with CV format
- Comment system
- Contact form
- Responsive design

## Technologies Used

### Frontend
- React 19
- React Icons
- React Router DOM

### Backend
- Express
- MongoDB with Mongoose
- CORS
- Nodemailer

## Scripts

### Client
- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

### Server
- `npm start` - Run production server
- `npm run dev` - Run development server with nodemon