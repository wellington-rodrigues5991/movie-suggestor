const express = require('express');
const bodyParser = require('body-parser');
const file = require('./open-file');

const PORT = 4000;
const HOST = '0.0.0.0';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/open', (req, res) => {
    if(req.body.file) file.open(req.body.file);
    res.sendStatus(200);
});

app.listen(PORT, HOST);