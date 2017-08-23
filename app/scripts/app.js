(function() {
  // Default environment variables
   var __env = {};

   // Import variables if present
   if(window){
     Object.assign(__env, window.__env);
   }

  function config($locationProvider, $stateProvider, $routeProvider) {
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
         })
         .state('list', {
           url: '/list',
           controller: 'ListCtrl as list',
           templateUrl: '/templates/list.html'
         });

      $routeProvider
        .when('/lists/:id', {
          controller: 'ListCtrl as list'
        });

        ngModule.constant('__env', __env);
        
   }

  angular
    .module('blocitoff', ['ui.router', 'ui.bootstrap', 'ngCookies', 'ngRoute'])
    .config(config);
})();
