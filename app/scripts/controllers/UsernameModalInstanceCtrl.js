(function(){
  function UsernameModalInstanceCtrl($uibModalInstance, ListsApiRequests) {

    this.showSignIn = function() {
      document.getElementById('signIn').style.display = "block";
      document.getElementById('signUp').style.display = "none";
    }

    this.createUsername = function() {
      if (this.username === undefined) {
        alert("You didn't enter a username!");
      } else {
          ListsApiRequests.create_user(this.username, this.password);
          $uibModalInstance.close(this.username);

      }
    };

    this.signInUser = function() {
      if (this.username === undefined) {
        alert("You didn't enter a username!");
      } else {
          ListsApiRequests.sign_in(this.username, this.password);
          $uibModalInstance.close();
      }
    };
  }
  angular
    .module('blocitoff')
    .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', 'ListsApiRequests', UsernameModalInstanceCtrl])
})();
