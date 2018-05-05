const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); // req.logout() function is automatically attached with req by passport
    res.redirect('/');
    //res.send(req.user); // Send user is looged out so undefined will be returned
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
