const mongoose = require('mongoose');

// Define the Campaign schema
const UserSchema = new mongoose.Schema({
    
    email: {
        type : String,
        required : true,
        unique: true,
        lowercase : true
    },
    password: {
        type: String,
    }
}
);



module.exports = mongoose.model('User', UserSchema);


// firstName:{
//     type:String,
//     required : true
// },

// lastName:{
//     type: String,
//     required : true
// },