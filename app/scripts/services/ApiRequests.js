(function(){
  function ApiRequests($http){
  var users = {
            method: 'GET',
            url: 'http://localhost:3000/api/users/',
            headers: $httpProvider.defaults.headers.get = { 'username' : 'password' }
        };

        $http(users).then(function successCallback(response) {
            ApiRequests.users = response;
        });
      };

  angular
    .module('blocitoff')
    .factory('ApiRequests', ['$http', ApiRequests]);
})();
