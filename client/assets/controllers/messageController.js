
myApp.controller('messageController', ['userFactory', '$location', '$routeParams', messageController]);

function messageController(userFactory, $location, $routeParams) {

    var _this = this;

    // function getCurrentUser() {
    //     userFactory.getCurrentUser(function(data) {
    //         _this.user = data;
    //         userFactory.go_to_topic($routeParams.id, function (data) {
    //             console.log("this is data back from factory", data);
    //             _this.topic = data;
    //
    //         })
    //
    //
    //     })
    // }

}