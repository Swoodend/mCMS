'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));

app.post('/api/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log('in login', email, password)    
    res.json({"status": "OK"});
})

app.post('/api/signup', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log('in signup', email, password)
    res.json({"status":"OK"});
})


app.listen(port, () => { 
    console.log('app listening on', port);
})