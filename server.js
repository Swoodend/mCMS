'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./db/UserModel.js').User;
const bcrypt = require('bcrypt');

//multer stuff
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '/public/uploads'));
    },
    filename: function(req, file, cb) {
        console.log('outside of route');
        let fileType = file.mimetype;
        cb(null, file.fieldname + '.' + file.mimetype.substring(file.mimetype.indexOf('/') + 1)); //avatar.png
    }
});
const upload = multer({
    storage: storage
});





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


app.post('/api/upload', upload.single('avatar'), (req, res, next) => {
    //limit size to some amount of bytes
    //limit file type to .png, .jpeg
    console.log('inside of route');
    res.send('coolies');

   
});

app.listen(port, () => { 
    console.log('app listening on', port);
});