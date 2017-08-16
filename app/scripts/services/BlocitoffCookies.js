(function() {
  function BlocitoffCookies($cookies, $uibModal, ApiRequests) {
    var user_id;
    var currentUser = $cookies.get('blocitoffCurrentUser');
    if (!currentUser || currentUser === '') {
      var usernameModalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: 'templates/createUsernameModal.html',
        controller: 'UsernameModalInstanceCtrl',
        controllerAs: 'usernameModal',
        backdrop: 'static',
        keyboard: false
      });

      usernameModalInstance.result.then(
        function(user) {
          console.log(user);
          //pass this logic to ApiRequests 
          $cookies.put('blocitoffCurrentUser', user.username,
          {
            expires: new Date(2020, 05, 25),
            user_id: user_id
          });
          return username;
        })
     }
     return {
       username: currentUser
     }
  };
  angular
    .module('blocitoff')
    .run(['$cookies', '$uibModal', 'ApiRequests', BlocitoffCookies]);
})();
