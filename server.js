const express = require('express');
const config  = require('./config.js');

const PORT = config.PORT;
const HOST = config.HOST;

const app = express();
app.get('/', (req, res) => {
  res.send('dadadsasd');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);