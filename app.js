'use strict';

const express    = require('express');

const app        = express();
const bodyParser = require('body-parser');
const fs         = require('fs');
const logger     = require('morgan');
const path = require('path');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(logger('combined', { stream: accessLogStream, skip: function (req, res) { return res.statusCode < 400; } }));
app.use(logger('dev'));

const port = process.env.PORT || 8020;
// routes
require('./routes/index.js')(app);

app.listen(port, function() {
    console.log('Magic happens on port ' +port);
});
