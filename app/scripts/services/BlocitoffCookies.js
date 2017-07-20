(function() {
  function BlocitoffCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocitoffCurrentUser');
    if (!currentUser || currentUser === '') {
      var usernameModalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: 'templates/createUsernameModal.html',
        controller: 'UsernameModalInstanceCtrl',
        controllerAs: 'usernameModal'
      });

      usernameModalInstance.result.then(
        function(username) {
          $cookies.put('blocitoffCurrentUser', username, {
            expires: new Date(2020, 05, 25)
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
    .run(['$cookies', '$uibModal', BlocitoffCookies]);
})();