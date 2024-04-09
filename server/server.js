// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./database'); // Import the database connection function
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const authMiddleware = require('./middleware/authMiddleware'); // Import authentication middleware
const campaignRoutes = require('./routes/campaignRoutes'); // Import campaign routes
//const usersRoutes = require('./routes/usersRoutes'); // Import user routes

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to the database

const app = express(); // Create an Express application

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Apply authMiddleware globally to all routes
app.use(authMiddleware);

// Routes
app.use('/api/auth', authRoutes); // Set up authentication routes
//app.use('/api/users', usersRoutes); // Set up user routes
app.use('/api', campaignRoutes); // Set up campaign routes

// Default route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to FundMe Platform" }); // Return a welcome message
});

// Start the server
const port = process.env.PORT || PORT; // Set the port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Log a message when the server starts
});

