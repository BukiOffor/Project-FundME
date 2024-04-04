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

/*
// login route
exports.loginUser = async (req, res) => {
    try {
        console.log(req.body);
        const foundUser = await User.findOne({ email: req.body.email });
        
        if (!foundUser) {
            return res.status(401).json({ message: "Incorrect email" });
        }

        let match = bcrypt.compareSync(req.body.password, foundUser.password)
        if(!match){
            res.status(401).json({message : "Incorrect password"})
        }
        return res.json({match})

        // Here you can proceed with comparing passwords, generating tokens, etc.
        // For simplicity, I'll just return the found user for now.
        return res.status(200).json({ user: foundUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
*/


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
    
    // "error": "Illegal arguments: undefined, undefined"
   // "error": "Illegal arguments: string, undefined"

// check if user exists
//comapre users password with stored hash
//create token
//send token to user

/*
exports.registerNewUser = (req, res) => {
    // Logging the entire request body to inspect its contents
    console.log("Request Body:", req.body);

    // Check if req.body has the email property
    if (!req.body || !req.body.email) {
        return res.status(400).json({ message: "email is missing in request body" });
    }

    // fetch user details from req body
    // Check if user with email exists
    User.findOne({ email : req.body.email}, (err,existingUser) => {
        //console.log(email)
        if (err) {
            return res.status(500).json({err});
        }
        if (existingUser){
            return  res.status(400).json({message: "A user with this email already exists"});
        }
        User.create({
            firstname: req.body.firstname,
            lastName:  req.body.lastname,
            email:   req.body.email
            
        }, (err,newUser) => {
            if (err) {
                return res.status(500).json({err});
            }
        // hash the user password
        bcrypt.genSalt(10, (err, salt) => {
            if(err) {
                return res.status(500).json({err});
            }
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) =>{
                if (err){
                    return res.status(500).json({err});
                }
                // save hashed password
                newUser.password = hashedPassword;
                newUser.save((err, savedUser) =>{
                    if(err) {
                        return res.status(500).json({err});
                    }
                    // create token
                    jwt.sign(
                        {
                            id : newUser.id,
                            firstname : newUser.firstname,
                            lastname : newUser.lastname,
                            email : newUser.email,

                        },  SECRET,{expiresIn : expiry }, (err, token) =>{
                            if (err){
                                return res.status(500).json({err});
                            }
                            return res.status(200).json({
                                message : "User successfully created",
                                token
                            });
                        }
                    );
                    // send token to user

                });

            });
            // save hash password
            //newUser.password = 
        });
    }); 
            
    });
}; */