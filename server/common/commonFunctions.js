const env = require('../env.json');
const modelFunctions = require('../db/modelFunctions.js');

const commonFunctions = {
  config: () => {
		return env[process.env.NODE_ENV || 'development'];
	}
};

module.exports = commonFunctions;
