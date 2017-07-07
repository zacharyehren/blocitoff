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
              console.log(response.data);
              ApiRequests.users = response.data;
          });

        return ApiRequests;
    };

  angular
    .module('blocitoff')
    .factory('ApiRequests', ['$http', ApiRequests]);
})();
