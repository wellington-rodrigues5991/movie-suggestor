const express = require('express');
const open = require('open');

(async () => { 
    await open("file:///C:/Users/well_/Desktop/unicorn.png", {wait: true}); 
    console.log('The image viewer app quit!');
})();

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.send("<img src='unicorn.png' />");
});

app.listen(PORT, HOST);