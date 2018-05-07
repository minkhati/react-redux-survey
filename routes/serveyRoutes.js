const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // Before creating a survey user should be loggedin and should have sufficient credits
  // when someone send post request '/api/surveys' then make sure requireLogin runs
  app.post('/api/surveys', requireLogin, (req, res) => {});
};
