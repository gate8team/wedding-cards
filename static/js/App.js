(function() {

var app = angular.module('weddingCard', []);

app.factory('UserFactory', function($q){
   return {
       getFriendList: function() {
           var deferred = $q.defer();
           VK.init(function() {
               VK.api("friends.get", {fields: "online,photo", test_mode: 1}, function(data) {
                   var userList = [];
                   if (data.response && data.response.length > 0) {
                       data = data.response;

                       for (var i = 0; i < data.length; i++) {
                           var user = new User({
                               firstName: data[i].first_name,
                               lastName: data[i].last_name,
                               uid: data[i].uid,
                               online: data[i].online,
                               avatar: data[i].photo
                           });
                           userList.push(user);
                       }
                   }
                   deferred.resolve(userList);
               });
           });
           return deferred.promise;
       }
   }
});

app.controller('UserController', function($scope, UserFactory){
    $scope.usersInfo = {};

    $scope.usersInfo.selectedFriendsCount = 0;
    $scope.usersInfo.selectedFriendsList = [];
    $scope.usersInfo.userList = UserFactory.getFriendList();

    $scope.usersInfo.userList.then(function (userList) {
        $scope.usersInfo.userList = userList;
    });

    $scope.selectIt = function(uid) {
        var index = $scope.usersInfo.selectedFriendsList.indexOf(uid);
        if (index > -1) {
            $scope.usersInfo.selectedFriendsList.splice(index, 1);
        } else {
            $scope.usersInfo.selectedFriendsList.push(uid);
        }
    };
});

})();