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
         .state('login', {
           url: '/login',
           templateUrl: 'templates/login.html',
           controller: 'AuthCtrl',
           onEnter: function(Auth, $state){
             Auth.currentUser().then(function(){
            $state.go('home')
          })
         }
        })
        .state('register', {
          url: '/register',
          templateUrl: 'templates/register.html',
          controller: 'AuthCtrl',
          onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
         }
        })
         .state('users', {
           url: '/users',
           controller: 'UsersCtrl as users',
           templateUrl: '/templates/users.html'
         })
   }

  angular
    .module('blocitoff', ['ui.router', 'Devise'])
    .config(config);
})();
