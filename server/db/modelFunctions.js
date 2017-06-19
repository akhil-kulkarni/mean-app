const mongoose = require('mongoose');
const filesModel = require('./models/files.js');
const modelFunctions = {
  getAllFileRecords: (cb) => {
		filesModel.find().exec(cb);
	}
};

module.exports = modelFunctions;
