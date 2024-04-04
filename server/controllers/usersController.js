const User = require('../models/users');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
require('dotenv').config();
const { SECRET } = process.env; 


//@route PoST api/auth/
//@desc Authenticate User { creator,admin} and get token
//@access Public 
exports.getLoggedInUser = async(req,res) => {
    try {
        //Get user from db
        const user = await User.findById(req.user.id).select("password");

        // return user 
        res.json({
            statusCode: 200,
            message: "User gotten successfully",
            user : user
        });
    } catch(err){
        console.error(err.mesasge);
        res.status(500)
        .send("Server Error");
    }

};


//@route PoST api/auth/login
//@desc Authenticate User{ creator, admin} and get token
//@access Public 

exports.loginUser = async(req, res) => {
    //Check for errors
    const errors = validationResult(req);
    if (!errors.empty())
        return res.status(400).json({ errors: errors.array()});

    // else
    // destructure request body
    const { email, password } = req.body;

    try{
        // initialise user
        let user = await User.findone({ email });

        if (!user) 
            return res
                .status(400)
                .json({ 
                    statusCode:400, 
                    message: "invalid credential" 
                });
        
         //else .....
        //Check the password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
                return res.status(400).json({
                statusCode: 400,
                message: "Invalid credentials"
     });
      //else if there is a match,send token
     //send payload and signed token
     const payload = {
        user: {
            id: user.id,
        }
    };
    jwt.sign(
        payload,
    SECRET,
    {
        expiresIn :72000,
    },
    (err, token) => {
        if(err) throw err;
        res.json( {
            statusCode: 200,
            message: "Logged in successfully",
            user: {
                firstName : user.firstName,
                lastName: user.lastName,
                email: user.email,
                userRole : user.userRole,
                isCreator : user.isCreator,
                isAdmin : user.isAdmin
            },
            token//token comes from  line64
        });
    }
    );
        

 } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");

    }
};

       
    
