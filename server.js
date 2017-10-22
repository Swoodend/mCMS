'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./db/UserModel.js').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'jfha7q8r6yudfgjhasfgvsgfag7rt6twerGHJSAOFG';
const multer = require('multer');

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
            console.log('bad email', err);
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
                let token = req.body.token ? req.body.token : jwt.sign({currentUser: email}, secret)
                res.json({"status": "OK", "token": token});
            }
        })
    })
})
 
app.post('/api/signup', (req, res) => {
    console.log("SINGUP ROUTE RUNNING");
    let email = req.body.email;
    let password = req.body.password;
    let token = req.body.token || jwt.sign({currentUser: email}, secret);
    bcrypt.hash(password, 10, (err, hash) => {
        if(err){
            res.json({"status": "bcrypt hashing error"});
        }
        
        let newUser = new User({email: email, password: hash});   
        newUser.save((err) => {
            if (err){
                throw err;
            }
            res.json({"status":"OK", "token": token});
        });
    })
    
});


app.post('/api/upload', (req, res, next) => {
    let storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, path.join(__dirname, '/public/uploads'));
        },
        filename: function(req, file, cb) {
            let fileType = file.mimetype;
            cb(null, file.fieldname + '.' + file.mimetype.substring(file.mimetype.indexOf('/') + 1)); //avatar.png
        }
    });
    
    let upload = multer({storage: storage}).single('avatar')


    upload(req, res, (err) => {
        console.log('in upload', req.body);
        if (err){
            res.send('something went wrong', err)
        } else {
            res.json({"status" : "OK"});    
        }
    })
});

app.post('/api/validate', (req, res) => {
    //this route confirms token is valid and sends the current user
    //back to the client to be displayed in the app
    let token = req.body.token;
    jwt.verify(token, secret, (err, decoded) => {
        console.log('decoded', decoded);
        res.json({"status":"OK", "currentUser": decoded.currentUser});
    })
});

app.listen(port, () => { 
    console.log('app listening on', port);
});