// creating the database entry point
// create aconnection function for mongodb
// start a local mongodb server connection

// import the mongose package
const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URL} = process.env;


//Async mongoose connection
const connectDB = async () => {
	try{
		await mongoose.connect(MONGO_URL, {
		useNewUrlParser: true,
		// useCreateIndex: true,
		useUnifiedTopology: true,
		//useFindAndModify: false
	});
	console.log(" the MongoDB is connected...");
	
	// seed data 

	} catch (err) {

		console.error(err.message);
		// exit with failure;
		process.exit(1);
	}
};

module.exports = connectDB; 


 

	