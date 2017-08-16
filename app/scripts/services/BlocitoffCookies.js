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
     }
     return {
       username: currentUser
     }
  };
  angular
    .module('blocitoff')
    .run(['$cookies', '$uibModal', 'ApiRequests', BlocitoffCookies]);
})();
