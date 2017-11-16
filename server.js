'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./db/UserModel.js').User;
const Content = require('./db/ContentModels.js').Content;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'jfha7q8r6yudfgjhasfgvsgfag7rt6twerGHJSAOFG';
const multer = require('multer');
const fs = require('fs');
const imageHelper = require('./helpers/image_upload/image_helpers.js');
const contentBuilder = require('./src/helpers/content_builders.js');
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
            // console.log('file', file);
            cb(null, file.originalname); //avatar.png
        }
    });
    
    let upload = multer({storage: storage}).single('avatar')
    upload(req, res, (err) => {
        // console.log('rEQ>BODY', req.body);
        // console.log('req.File', req.file);
        jwt.verify(req.body.token, secret, (err, userObj) => {
            let folderExists = fs.existsSync(path.join(__dirname, '/public/uploads', userObj.currentUser))
            let oldName = path.join(__dirname, '/public/uploads/', req.file.originalname)
            let newDirectoryPath = path.join(__dirname, '/public/uploads', userObj.currentUser);
            let newFileLocation = newDirectoryPath + '/' + req.file.originalname;
            let pathToAvatar = "http://localhost:3001/public/uploads/" + userObj.currentUser + "/" + req.file.originalname
            let responseObj = {};


            if (folderExists){

                User.findOneAndUpdate({email: userObj.currentUser}, {$set: {avatar: pathToAvatar}}, {new: true}, (err, doc) => {
                    if (err){
                        responseObj.status = "ERR"
                        responseObj.errMsg = "Mongo Error - cannot update user avatar"
                    }
                    responseObj.status = "OK"
                    responseObj.avatarPath = pathToAvatar
                    imageHelper.moveFileAndSend(oldName, newFileLocation, responseObj, res);
                
                })
                
            } else {
                
                User.findOneAndUpdate({email: userObj.currentUser}, {$set: {avatar: pathToAvatar}}, {new: true}, (err, doc) => {
                    if (err){
                        responseObj.status = "ERR"
                        responseObj.errMsg = "Mongo Error - cannot update user avatar"
                    }
                    fs.mkdir(newDirectoryPath, () => {
                        responseObj.status = "OK"
                        responseObj.avatarPath = pathToAvatar                
                        imageHelper.moveFileAndSend(oldName, newFileLocation, responseObj, res);
                    });   
                })
            }
        })
    })
});

app.post('/api/validate', (req, res) => {
    //this route confirms token is valid and sends the current user
    //back to the client to be displayed in the app
    let token = req.body.token;
    jwt.verify(token, secret, (err, decoded) =>{
        res.json({
            status:"OK",
            currentUser: decoded.currentUser
        })
    })
});

app.get('/api/get-avatar/:email', (req, res) => {
    let { email } = req.params;
    User.findOne({email: email}, (err, user) => {
        res.json({status: "OK", avatarPath: user.avatar});
    })
})

app.post('/api/set-avatar', (req, res) => {
    let { email, path } = req.body;
    User.findOneAndUpdate({email: email}, {$set: {avatar: path}}, {new: true}, (err, doc) => {
        if (err){
            res.json({status:"ERR"});
        }
        console.log(doc);
        res.json({status:"OK", avatarPath: doc.avatar});
    })
})

app.get('/public/uploads/:user/:fileName', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/uploads/' + req.params.user + '/' + req.params.fileName));
})

app.get('/api/:token/avatars', (req, res) => {
    let token = req.params.token;
    
    jwt.verify(token, secret, (err, decoded) => {
        let email = decoded.currentUser;
        let pathToAvatar = './public/uploads/' + email;
        let folderExists = fs.existsSync(path.join(__dirname, '/public/uploads', decoded.currentUser));
        if (folderExists){
            fs.readdir(pathToAvatar, (err, files) => {
                console.log('files', files);
                res.json({"status":"OK", "fileNames": files});    
            });
        } else {
            res.json({"stauts": "OK", "fileNames": []})
        }

    });
});

app.post('/api/new/blog', (req, res) => {
    console.log('new blog submission received');
    console.log(req.body);
    jwt.verify(req.body.creator, secret, (err, decoded) => {
        req.body.creator = decoded.currentUser;
        let blogObj = contentBuilder.buildNewBlogObj(req.body);
        let blog = new Content(blogObj);
        blog.save((err) => {
            if (err) {
                console.log('error saving new blog', err);
            }
        });
    });
});

app.post('/api/new/newsletter', (req, res) => {
    console.log('new newletter submission received', req.body);
});

app.post('/api/new/article', (req, res) => {
    console.log('new article submission received', req.body);
});

app.listen(port, () => { 
    console.log('app listening on', port);
});