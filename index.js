const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models/User'); // this should load before passport
require('./services/passport'); // just caall passport file from services folder

mongoose.connect(keys.mongoURI);

const app = express();

// These following four middleware are used for every request that comes in
app.use(bodyParser.json()); // any post request comes in get parsed into json
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 10000, // in milliseconds 30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // authRoutes will call app as a parameter
require('./routes/billingRoutes')(app); //

const PORT = process.env.PORT || 5000;

app.listen(PORT);
