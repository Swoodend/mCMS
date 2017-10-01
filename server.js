'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./db/UserModel.js').User;
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mcms');

app.post('/api/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    
    User.findOne({email: email}, (err, user) => {
        if (err){
            console.log('bad email');
            res.json({"status":"bad email"})
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err){
                console.log('bcrypt error');
                res.json({"status": "bcrypt comparison error"});
            } else if (result == false) {
                console.log('wrong password');
                res.json({"status": "bad password"});
            } else {
                res.json({"status": "OK"});
            }
        })
    })
})

app.post('/api/signup', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    bcrypt.hash(password, 10, (err, hash) => {
        if(err){
            res.json({"status": "bcrypt hashing error"});
        }
        
        let newUser = new User({email: email, password: hash});   
        newUser.save((err) => {
            if (err){
                res.json({"status":"problem saving new user"});
            }
            res.json({"status":"OK"});
        });
    })
    
});


app.listen(port, () => { 
    console.log('app listening on', port);
});