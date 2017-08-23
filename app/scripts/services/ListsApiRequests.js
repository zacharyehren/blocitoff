(function() {
  function ListsApiRequests($http, $cookies) {

    var ListsApiRequests = {};
    var list_id;
    var currentUser;

    ListsApiRequests.setLists = function () {
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
        ListsApiRequests.setLists();
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
        ListsApiRequests.setLists();
      });
    };

    return ListsApiRequests;
  };

  angular
    .module('blocitoff')
    .factory('ListsApiRequests', ['$http', '$cookies', ListsApiRequests]);
})();
