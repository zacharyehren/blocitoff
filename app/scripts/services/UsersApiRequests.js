(function() {
  function UsersApiRequests($http, $cookies, ListsApiRequests) {

    var UsersApiRequests = {};

    UsersApiRequests.user_signed_in = function() {
      if ($cookies.get('blocitoffUserId') != undefined) {
        ListsApiRequests.setLists();
      }
    }


    UsersApiRequests.sign_in = function(username, password) {
      var users_request = {
        method: 'POST',
        url: 'http://localhost:3000/api/users/authenticate',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        },
        data: {
          username: username,
          password: password
        }
      };

      $http(users_request).then(function successCallback(response) {
        var currentUser = response.data;
        $cookies.put('blocitoffCurrentUsername', currentUser.username);
        $cookies.put('blocitoffUserId', currentUser.id);
        ListsApiRequests.setLists();
      });
    };


    UsersApiRequests.create_user = function(username, password) {
      var new_user = {
        method: 'POST',
        url: 'http://localhost:3000/api/users/',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        },
        data: {
          users: {
            username: username,
            password: password
          }
        }
      };

      $http(new_user).then(function successCallback(response) {
        newUser = response.data;
        $cookies.put('blocitoffCurrentUsername', newUser.username);
        $cookies.put('blocitoffUserId', newUser.id);
        ListsApiRequests.setLists();
      });
    };


    return UsersApiRequests;
  };

  angular
    .module('blocitoff')
    .factory('UsersApiRequests', ['$http', '$cookies', 'ListsApiRequests', UsersApiRequests]);
})();
