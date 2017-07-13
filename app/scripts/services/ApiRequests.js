(function(){
  function ApiRequests($http) {
    var ApiRequests = {};
    var users_request = {
              method: 'GET',
              url: 'http://localhost:3000/api/users/',
              headers: {
                'username' : 'Zachary',
                'password' : 'helloworld'
               }
          };

          $http(users_request).then(function successCallback(response) {
              ApiRequests.users = response.data;
              console.log(ApiRequests.users)
          });


    ApiRequests.create_task = function(task){
      var task_request = {
                method: 'POST',
                url: 'http://localhost:3000/api/lists/6/items',
                headers: {
                  'username' : 'Zachary',
                  'password' : 'helloworld'
                },
                 data: { item: { item: task } }
            };


            $http(task_request).then(function successCallback(response) {
                ApiRequests.task = response.data;
            });
    }

    var task_return = {
              method: 'GET',
              url: 'http://localhost:3000/api/lists/6/items',
              headers: {
                'username' : 'Zachary',
                'password' : 'helloworld'
               }
          };

          $http(task_return).then(function successCallback(response) {
              ApiRequests.tasks = response.data;
              console.log(ApiRequests.tasks)
          });

    return ApiRequests;
  };

  angular
    .module('blocitoff')
    .factory('ApiRequests', ['$http', ApiRequests]);
})();
