const express = require('express');
//const path = require('path');


const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cor');
const campaignRoutes = require('./routes/campaignRoutes');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();

const app = express();

//PORT
const port = process.env.PORT || PORT;

//app.use(express.json());
//server static files from the 'client' directory

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

 
