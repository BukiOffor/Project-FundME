const mongoose = require('mongoose');

// Define the Campaign schema
const UserSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
        required : true
    },

    lastName:{
        type: String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    password: {
        type: string
    },
    userRole: {
        type : String,
        enum: ["admin", "creator","not assigned"],
        default : "not assigned"
    },
    isCreator:{
        type : Boolean,
        default: 0
    },
    isadmin: {
        type: boolean,
        default: 0
    },
},
{
    timestamps :true
}
);



module.exports = mongoose.model('User', UserSchema);
