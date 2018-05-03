const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // One arguments => fetch something out of mongoose
// Tow arguments => to load something into it

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // Mongodb query is async so use promise
      User.findOne({ googleId: profile.id }).then(exisitingUser => {
        if (exisitingUser) {
          // We already have a record with the given profileId
        } else {
          // We don't have a user record with this ID, make a new record
          new User({ googleId: profile.id }).save();
        }
      });
    }
  )
);
