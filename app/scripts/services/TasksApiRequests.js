(function() {
  function TasksApiRequests($http, $cookies) {

    var TasksApiRequests = {};
    var list_tasks;

    TasksApiRequests.task_return = function() {
      list_tasks = {
        method: 'GET',
        url: 'http://localhost:3000/api/lists/' + $cookies.get('blocitoffListId') + '/items',
        headers: {
          'username': 'Zachary',
          'password': 'helloworld'
        }
      }
      $http(list_tasks).then(function successCallback(response) {
        TasksApiRequests.tasks = response.data;
      });
    };

    TasksApiRequests.list_refresh = function() {
      if ($cookies.get('blocitoffListId') != undefined) {
        TasksApiRequests.task_return();
      }
    }

    TasksApiRequests.create_task = function(task, list_id) {
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
        TasksApiRequests.tasks.push(task);
      });
    };





    TasksApiRequests.delete_task = function(task_id) {
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
          TasksApiRequests.tasks = response.data;
        });
      });
    };


    return TasksApiRequests;
  };

  angular
    .module('blocitoff')
    .factory('TasksApiRequests', ['$http', '$cookies', TasksApiRequests]);
})();
