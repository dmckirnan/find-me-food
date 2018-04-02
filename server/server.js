const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');
const users = require('./routes/users');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '..', 'build')));


app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));
app.use('/users', users);


// pg.connect('postgres://srsnejri:bmWZ3euCv_j92csRnAV1eUV4Z9T911jC@baasu.db.elephantsql.com:5432/srsnejri', () => 'DB Connected');
const server = app.listen(port, () => console.log('Express listening on 8000'));

module.exports = server;
