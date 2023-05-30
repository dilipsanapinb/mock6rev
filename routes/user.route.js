const express = require("express");

const { User } = require("../models/user.model");
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRoute = express.Router();

userRoute.post("/api/register", async(req, res) => {
    let { name, email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async function (err, hash) {
            if (err) {
                res.status(400).send({ Message: err.message });
                console.log(err);
            } else {
                let user = new User({ name, email, password:hash });
                await user.save()
                res.status(201).send({"Message":"Registration is successfull","User":user})
            }
        });
       
    } catch (error) {
        res.status(500).send({ "Message": error.message });
        console.log(error);
    }
})

// login
userRoute.post('/api/login', async(req, res) => {
    let { email, password } = req.body;
    let user=await User.findOne({'email':email});
    let hashPass = user.password;
    try {
        bcrypt.compare(password, hashPass, function (err, result) {
            if (result) {
                var token = jwt.sign({ userID: user._id }, process.env.key);
                res.status(201).send({ "Message": "Login is Successfull", "token": token });
            } else {
                res.status(400).send({ "Message": err.message });
                console.log(err);
            }
        });
    } catch (error) {
        res.status(500).send({ Message: error.message });
        console.log(error);
    }
})

module.exports={userRoute}