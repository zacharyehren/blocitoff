(function() {
  function ApiRequests($http) {

    var ApiRequests = {};
    var signed_in_user_id;
    var list_id;
    var display_lists;
    var list_tasks;

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
        ApiRequests.users = response.data;
        signed_in_user_id = ApiRequests.users.id;

        display_lists = {
          method: 'GET',
          url: 'http://localhost:3000/api/users/' + signed_in_user_id + '/lists',
          headers: {
            'username': 'Zachary',
            'password': 'helloworld'
          }
        };

        $http(display_lists).then(function successCallback(response) {
          ApiRequests.lists = response.data;
        });
      });
    };

    // ApiRequests.getListsForUser = function(user) {
    //   var display_lists = {
    //     method: 'GET',
    //     url: 'http://localhost:3000/api/users/' + user.id + '/lists',
    //     headers: {
    //       'username': 'Zachary',
    //       'password': 'helloworld'
    //     }
    //   };
    //
    //   $http(display_lists).then(function successCallback(response) {
    //     return response.data;
    //   });
    // };

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
        ApiRequests.newUser = response.data;
        signed_in_user_id = ApiRequests.newUser.id;
      });
    };




    ApiRequests.create_list = function(list_name) {
      var list_request = {
        method: 'POST',
        url: 'http://localhost:3000/api/users/' + signed_in_user_id + '/lists',
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
        url: 'http://localhost:3000/api/lists/' + list_id + '/items',
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

    ApiRequests.task_return = function(list_id) {
      list_tasks = {
        method: 'GET',
        url: 'http://localhost:3000/api/lists/' + list_id + '/items',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        }
      }

      $http(list_tasks).then(function successCallback(response) {
        ApiRequests.tasks = response.data;

      });
    };

    ApiRequests.delete_list = function(list_id) {
      list_delete = {
        method: 'DELETE',
        url: 'http://localhost:3000/api/users/' + signed_in_user_id + '/lists/' + list_id,
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        }
      }

      $http(list_delete).then(function successCallback(response) {
        $http(display_lists).then(function successCallback(response) {
          ApiRequests.lists = response.data;
        });
      });
    };

    ApiRequests.delete_task = function(task_id) {
      task_delete = {
        method: 'DELETE',
        url: 'http://localhost:3000/api/items/' + list_id,
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
    .factory('ApiRequests', ['$http', ApiRequests]);
})();
