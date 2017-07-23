(function(){
  function UsernameModalInstanceCtrl($uibModalInstance, ApiRequests) {

    this.showSignIn = function() {
      document.getElementById('signIn').style.display = "block";
      document.getElementById('signUp').style.display = "none";
    }

    this.createUsername = function() {
      if (this.username === undefined) {
        alert("You didn't enter a username!");
      } else {
          ApiRequests.create_user(this.username, this.password);
          console.log(this.username);
          $uibModalInstance.close(this.username);

      }
    };

    this.signInUser = function() {
      if (this.username === undefined) {
        alert("You didn't enter a username!");
      } else {
          ApiRequests.sign_in(this.username, this.password);
          console.log(this.username);
          $uibModalInstance.close(this.username);
      }
    };
  }
  angular
    .module('blocitoff')
    .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', 'ApiRequests', UsernameModalInstanceCtrl])
})();
