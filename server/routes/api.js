const express = require('express');
const router = express.Router();

const commonFunctions = require('../common/commonFunctions');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all files
router.get('/files', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB

});
module.exports = router;
