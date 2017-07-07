(function() {
  function config($locationProvider, $stateProvider) {
     $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
          });

     $stateProvider
        .state('home', {
             url: '/',
             controller: 'HomeCtrl as home',
             templateUrl: '/templates/home.html'
         })
         .state('users', {
           url: '/users',
           controller: 'UsersCtrl as users',
           templateUrl: '/templates/users.html'
         });
   }

  angular
    .module('blocitoff', ['ui.router'])
    .config(config);
})();
