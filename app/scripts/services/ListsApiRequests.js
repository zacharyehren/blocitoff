(function() {
  function ListsApiRequests($http, $cookies) {

    var ListsApiRequests = {};
    var list_id;
    var currentUser;

    function setLists() {
      var display_lists = {
        method: 'GET',
        url: 'http://localhost:3000/api/users/' + $cookies.get('blocitoffUserId') + '/lists',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        }
      };

      $http(display_lists).then(function successCallback(response) {
        ListsApiRequests.lists = response.data;
      });
    }


    ListsApiRequests.user_signed_in = function() {
      if ($cookies.get('blocitoffUserId') != undefined) {
        setLists();
      }
    }


    ListsApiRequests.sign_in = function(username, password) {
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
        currentUser = response.data;
        $cookies.put('blocitoffCurrentUsername', currentUser.username);
        $cookies.put('blocitoffUserId', currentUser.id);
        setLists();
      });
    };


    ListsApiRequests.create_user = function(username, password) {
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
        setLists();
      });
    };


    ListsApiRequests.create_list = function(list_name) {
      var list_request = {
        method: 'POST',
        url: 'http://localhost:3000/api/users/' + $cookies.get('blocitoffUserId') + '/lists',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        },
        data: {
          lists: {
            name: list_name
          }
        }
      };

      $http(list_request).then(function successCallback(response) {
        new_list = response.data;
        list_id = new_list.id;
        setLists();
      });
    };


    ListsApiRequests.delete_list = function(list_id) {
      list_delete = {
        method: 'DELETE',
        url: 'http://localhost:3000/api/users/' + $cookies.get('blocitoffUserId') + '/lists/' + list_id,
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        }
      }

      $http(list_delete).then(function successCallback(response) {
        setLists();
      });
    };

    return ListsApiRequests;
  };

  angular
    .module('blocitoff')
    .factory('ListsApiRequests', ['$http', '$cookies', ListsApiRequests]);
})();
