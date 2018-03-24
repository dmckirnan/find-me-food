const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const users = require('./routes/users');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '..', 'build')));


app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));
app.use('/users', users);

const server = app.listen(8000, () => console.log('Listening on 8000'));
module.exports = server;
