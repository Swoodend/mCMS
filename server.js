'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/login', (req, res) => {
    res.json({"status": "OK"});
})

app.listen(port, () => { 
    console.log('app listening on', port);
})