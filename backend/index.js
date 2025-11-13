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

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on PORT ${PORT}`);
});
