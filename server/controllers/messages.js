console.log("messages Controller");

var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Messenger = mongoose.model("Messenger");

function messagesController() {
    this.home = function (req, res) {
        Messenger.find({}, false, true).exec(function (err, messages) {
            console.log("made it to the messages controller, should send messages back");
            res.json(messages);
        })
    };

    this.sent_messenger = function (req, res){
        console.log("this is the req body",req.body);
        var newMessage = new Messenger(req.body);
        console.log("this is what got to the back end controller", newMessage);
        newMessage.save( function(err, result) {
            if (err) {
                console.log('unable to add message');
            } else {
                console.log('successfully added a message!');
                res.sendStatus(200);
            }
        })
    }




};
module.exports = new messagesController();


