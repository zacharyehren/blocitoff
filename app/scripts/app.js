(function() {
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
          templateUrl: '/templates/list.html',
          controller: 'ListCtrl as list'
        });


   }

  angular
    .module('blocitoff', ['ui.router', 'ui.bootstrap', 'ngCookies', 'ngRoute'])
    .config(config);
})();
