(function() {
  function BlocitoffCookies($cookies, $uibModal, ApiRequests) {
    var user_id;
    var currentUsername = $cookies.get('blocitoffCurrentUsername');
    var userId = $cookies.get('blocitoffUserId');


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


     return {
       username: currentUsername,
       userId: userId
     }

     
  };
  angular
    .module('blocitoff')
    .run(['$cookies', '$uibModal', 'ApiRequests', BlocitoffCookies]);
})();
