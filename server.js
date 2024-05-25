const express = require('express');
const todoRoutes = require('./todoRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the todo routes
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});