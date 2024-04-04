// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./database'); // Import the database connection function
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
//const usersRoutes = require('./routes/usersRoutes'); // Import user routes

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to the database

const app = express(); // Create an Express application

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/auth', authRoutes); // Set up authentication routes
//app.use('/api/users', usersRoutes); // Set up user routes

// Default route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to FundMe Platform" }); // Return a welcome message
});

// Start the server
const port = process.env.PORT || PORT; // Set the port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Log a message when the server starts
});

/*const express = require('express');
//const path = require('path');


const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const campaignRoutes = require('./routes/campaignRoutes');
const dotenv = require('dotenv');
const connectDB = require('./database');
dotenv.config();

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



//Route
const authRoutes = require('./routes/authRoutes');
const users = require('./routes/users');




//PORT
const port = process.env.PORT || PORT;

//app.use(express.json());
//server static files from the 'client' directory


app.use(users);
app.use('/api/auth',authRoutes);

//Initialising express middleware
app.use(express.json({extended : false}));

//connecting the database

connectDB();
//Create a basic route
app.get('/', (req, res) => {
  //const indexPath = path.join('../client','index.html');
  //res.sendFile(indexPath);
  res.json({message: "Welcome to FundMe Platform"});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/
 
