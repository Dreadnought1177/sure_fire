
myApp.controller('userController', ['userFactory', '$location', userController]);

function userController(userFactory, $location){
    var _this = this;
    var _name = name;
    var user = {};


    function finder() {
        _this.user = {name:"Chase"};
        console.log("this is where the user should go",name)

    }
    // finder();
    console.log("Scoped user for pretend", this.user);

    this.adduser = function(){
        userFactory.adduser(this.user, function(data) {
            console.log("factory add user");
            if(data.hasOwnProperty('errors')){
                _this.regErrors = data.errors;
                console.log(data.errors);
            } else {
                _this.user_now = {name:data.name};
                console.log("you did it!");
                console.log("Scoped user for pretend = user_now", _this.user_now);
                _this.user = {};
                parent.$.fancybox.close();

            }
        })
    };

    this.loginuser = function(){
        userFactory.loginuser(this.user, function(data){
            console.log("This is controllers attempt to log in user", data);
            if(data.hasOwnProperty('errors')){
                _this.loginErrors = data.errors;
                console.log(data.errors);
            } else {
                console.log("you won");
                _this.user_now = {name:data.name};
                console.log("Scoped user for pretend = user_now", _this.user_now);
                _this.user = {};
                parent.$.fancybox.close();
                // $location.url('/');
                // window.location = "http://www.google.com"
            }
        })
    };

    this.send_messenger = function(newMessage){

        userFactory.send_messenger(newMessage, function (data) {
            if(data.hasOwnProperty('errors')){
                _this.commentErrors = data.errors;
                console.log(data.errors);
            } else {
                _this.messenger = {};
            }
        })
    };
    function get_messages(){
        userFactory.getMessages(function(data) {
            _this.chases_messages = data;
            console.log("chases_messages", _this.chases_messages)
        })

    }
    get_messages()
}