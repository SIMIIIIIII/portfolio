const express = require('express');

const mongoose = require('mongoose');
const commentRouter = require('./routes/comments');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/comments'

mongoose.connect(DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js + MongoDB API!');
});

app.use('/comments', commentRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});