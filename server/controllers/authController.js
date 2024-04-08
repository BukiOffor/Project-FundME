const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { SECRET } = process.env; 
const expiry = 3600;



exports.registerNewUser = async (req, res) => {
    try {
        //console.log(user)
        // Check if req.body has the email property
        if (!req.body || !req.body.email) {
            return res.status(400).json({ message: "email is missing in request body" });
        }

        // Check if user with email exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "A user with this email already exists" });
        }

        // Create new user
        const newUser = await User.create({
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            email: req.body.email
        });

        // Hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Save hashed password
        newUser.password = hashedPassword;
        await newUser.save();

        // Create token
        const token = jwt.sign(
            {
                id: newUser.id,
                // firstName: newUser.firstName,
                // lastName: newUser.lastName,
                email: newUser.email,
            }, SECRET, { expiresIn: expiry }
        );

        // Send success response with token
        return res.status(200).json({
            message: "User successfully created",
            token :token
        });
    } catch (error) {
        // Check if the error is a validation error
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(error => error.message);
            return res.status(400).json({ error: errors });
        }
        // Handle other errors
        return res.status(500).json({ error: error.message });
    }
};



exports.loginUser = async (req, res) => {
    
    try {
        // check if user exists
        const foundUser = await User.findOne({email : req.body.email});
        if(!foundUser){ 
            return res.status(401).json({message : "Incorrect email"});
       
        }
        
        //Check if password is correct
        let match =  bcrypt.compareSync(req.body.password, foundUser.password);
        if(!match){
            return res.status(401).json({ message : " Incorrect password"});
        }
        // if password is correct create token
        jwt.sign({
            id: foundUser._id,
            // firstName : foundUser.firstName,
            // lastName : foundUser.lastName,
            email : foundUser.email
        }, SECRET,{
            expiresIn : expiry
        }, (err, token) =>{
            if (err) {
                return res.status(500).json({ err })
            }
            return res.status(200).json({
                message: "user logged in",
                token 
            });
        });
        

    }catch(error){
        // Check if the error is a validation error
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(error => error.message);
            return res.status(400).json({ error: errors });
        }
        return res.status(500).json({ error: error.message });
    }};
    
 