const express = require('express');
const path = require('path');


const mongoose = require('mongoose')
const bodyParser =require('body-parser');
const cors = require('cor')
const campaignRoutes = require('./routes/campaignRoutes');
const dotenv = require('dotenv');


dotenv.config();

const app = express();


const port = process.env.PORT || 4000;

//app.use(express.json());
//server static files from the 'client' directory


//app.use(express.static("client"))


app.get('/', (req, res) => {
  const indexPath = path.join('../client','index.html');
  res.sendFile(indexPath);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
*/   
