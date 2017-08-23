(function() {
  function BlocitoffCookies($cookies, $uibModal) {
    var currentUsername = $cookies.get('blocitoffCurrentUsername');

    if (!currentUsername || currentUsername === '') {
      var usernameModalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: 'templates/createUsernameModal.html',
        controller: 'UsernameModalInstanceCtrl',
        controllerAs: 'usernameModal',
        backdrop: 'static',
        keyboard: false
      });
     }

  };
  angular
    .module('blocitoff')
    .run(['$cookies', '$uibModal', BlocitoffCookies]);
})();
