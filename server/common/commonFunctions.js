const env = require('../env.json');
const modelFunctions = require('../db/modelFunctions.js');

const commonFunctions = {
  config: () => {
		return env[process.env.NODE_ENV || 'development'];
	},
  getAllFileRecords: (cb) => {
    modelFunctions.getAllFileRecords(cb);
  }
};

module.exports = commonFunctions;
