(function() {
  function ApiRequests($http, $cookies) {

    var ApiRequests = {};
    var signed_in_user_id;
    var list_id;
    var display_lists;
    var list_tasks;
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
        ApiRequests.lists = response.data;
      });
    }

    ApiRequests.user_signed_in = function() {
      if ($cookies.get('blocitoffUserId') != undefined) {
        setLists();
      }
    }


    ApiRequests.sign_in = function(username, password) {
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


    ApiRequests.create_user = function(username, password) {
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


    ApiRequests.create_list = function(list_name) {
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
        ApiRequests.lists.push(new_list);
      });
    };


    ApiRequests.create_task = function(task, list_id) {
      var task_request = {
        method: 'POST',
        url: 'http://localhost:3000/api/lists/' + $cookies.get('blocitoffListId') + '/items',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        },
        data: {
          item: {
            item: task
          }
        }
      };

      $http(task_request).then(function successCallback(response) {
        var task = response.data;
        ApiRequests.tasks.push(task);
      });
    };


    ApiRequests.task_return = function() {
      list_tasks = {
        method: 'GET',
        url: 'http://localhost:3000/api/lists/' + $cookies.get('blocitoffListId') + '/items',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        }
      }
      $http(list_tasks).then(function successCallback(response) {
        ApiRequests.tasks = response.data;
      });
    };

    ApiRequests.list_refresh = function() {
      if ($cookies.get('blocitoffListId') != undefined) {
        ApiRequests.task_return();
      }
    }


    ApiRequests.delete_list = function(list_id) {
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


    ApiRequests.delete_task = function(task_id) {
      task_delete = {
        method: 'DELETE',
        url: 'http://localhost:3000/api/items/' + task_id,
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        }
      }

      $http(task_delete).then(function successCallback(response) {
        $http(list_tasks).then(function successCallback(response) {
          ApiRequests.tasks = response.data;
        });
      });
    };


    return ApiRequests;
  };

  angular
    .module('blocitoff')
    .factory('ApiRequests', ['$http', '$cookies', ApiRequests]);
})();
