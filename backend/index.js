const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const cors = require('cors');

const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

// Middlewares
app.use(express.json());
app.use(cors());

// Test route
app.get('/nig', (req, res) => {
    res.send("hello");
});

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

module.exports = app; // FOR VERCEL
