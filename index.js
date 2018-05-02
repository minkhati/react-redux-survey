const express = require('express');
require('./services/passport'); // just caall passport file from services folder

const app = express();

require('./routes/authRoutes')(app); // authRoutes will call app as a parameter

const PORT = process.env.PORT || 5000;

app.listen(PORT);
