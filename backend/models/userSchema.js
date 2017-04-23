var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: { type: String, required: false},
	password: { type: String, required: false},
	feeling: {type: String, required: false}
});

var userSchema = mongoose.model('userSchema', userSchema);

module.exports = userSchema;
