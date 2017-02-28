
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messengerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true},
    subject: {type: String, required: true},
    message:{type: String, required: true}
});

mongoose.model('Messenger', messengerSchema);
