const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // this should load before passport
require('./services/passport'); // just caall passport file from services folder

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // authRoutes will call app as a parameter

const PORT = process.env.PORT || 5000;

app.listen(PORT);
