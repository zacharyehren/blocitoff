(function(){
  function UsernameModalInstanceCtrl($uibModalInstance, ApiRequests) {


    this.setUsername = function() {
      if (this.username === undefined) {
        alert("You didn't enter a username!");
      } else {
          ApiRequests.create_user(this.username, this.password);
          console.log(this.username);
          $uibModalInstance.close(this.username);

      }
    };
  }
  angular
    .module('blocitoff')
    .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', 'ApiRequests', UsernameModalInstanceCtrl])
})();
