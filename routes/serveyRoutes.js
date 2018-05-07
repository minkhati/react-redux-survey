const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middleware/requireCredits');

module.exports = app => {
  // Before creating a survey user should be loggedin and should have sufficient credits
  // when someone send post request '/api/surveys' then make sure requireLogin runs
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {});
};
