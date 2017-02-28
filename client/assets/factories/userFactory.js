myApp.factory('userFactory', ['$http', function($http){
    var factory = {};
    factory.user = {};


    factory.adduser = function(user, callback){

        $http.post('/create', user).then(function(returned_data){
            factory.user = returned_data.data;
            callback(returned_data.data);
        })
    };

    factory.loginuser = function(user, callback){
        $http.post('/login', user).then(function(returned_data){
            factory.user = returned_data.data;
            callback(returned_data.data);
        })
    };


    factory.addmessage = function(message, id, callback){
        $http.post('/addmessage/'+ id, message).then(function(){
            callback();
        })
    };


    factory.getMessages = function(callback){
        $http.get('/messages').then(function(returned_data){
            callback(returned_data.data);
        })
    };


    factory.send_messenger = function(message, callback){
        $http.post('/sent_messenger', message).then(function(returned_data){
            callback(returned_data.data);
        })
    };

    return factory;
}]);
