var app = angular.module('weddingCard', []);

app.controller('UserController', function($scope){
    $scope.userList = [
        new User({
            firstName: 'Максим',
            lastName: 'Филипповский',
            uid: 17075055,
            online: 1,
            avatar: 'http://cs613527.vk.me/v613527055/1b6ea/AMsBd4j750A.jpg'
        }),
        new User({
            firstName: 'Максим',
            lastName: 'Филипповский',
            uid: 17075055,
            online: 1,
            avatar: 'http://cs613527.vk.me/v613527055/1b6ea/AMsBd4j750A.jpg'
        }),
        new User({
            firstName: 'Максим',
            lastName: 'Филипповский',
            uid: 17075055,
            online: 1,
            avatar: 'http://cs613527.vk.me/v613527055/1b6ea/AMsBd4j750A.jpg'
        }),
        new User({
            firstName: 'Максим',
            lastName: 'Филипповский',
            uid: 17075055,
            online: 1,
            avatar: 'http://cs613527.vk.me/v613527055/1b6ea/AMsBd4j750A.jpg'
        }),
        new User({
            firstName: 'Максим',
            lastName: 'Филипповский',
            uid: 17075055,
            online: 1,
            avatar: 'http://cs613527.vk.me/v613527055/1b6ea/AMsBd4j750A.jpg'
        })
    ];

    $scope.init = function() {
        VK.init(function() {
            VK.api("friends.get", {fields: "online,photo", test_mode: 1}, function(data) {
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
                        $scope.userList.push(user);
                    }
                }
            });
        });
    }
});