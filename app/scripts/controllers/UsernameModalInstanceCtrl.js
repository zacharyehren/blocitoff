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
          $uibModalInstance.close(this.username);

      }
    };

    this.signInUser = function() {
      if (this.username === undefined) {
        alert("You didn't enter a username!");
      } else {
          var authenticated = ApiRequests.sign_in(this.username, this.password);
          $uibModalInstance.close(this.username);
          if (authenticated) {
            console.log("AUTHENTICATED");
          }
      }
    };
  }
  angular
    .module('blocitoff')
    .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', 'ApiRequests', UsernameModalInstanceCtrl])
})();
