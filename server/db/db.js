const mongoose = require("mongoose");
const commonFunctions = require("../common/commonFunctions.js");
const config = commonFunctions.config();

//connect to database
const db = mongoose.connect(config.mongodb);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
	console.log('Mongoose default connection open to ' + config.mongodb);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
	console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected');
});

// mongoose.connection.once('connected', function(){
// 	mongoose.connection.db.dropCollection('loginCollection');
// 	mongoose.connection.db.dropCollection('filesCollection');
// 	mongoose.connection.db.dropCollection('emailsCollection');
// });

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});

module.exports = db;
