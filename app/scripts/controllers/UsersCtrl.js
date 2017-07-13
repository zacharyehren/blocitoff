(function() {
  function UsersCtrl(ApiRequests) {
    this.users = ApiRequests.users;
  }

  angular
  .module('blocitoff')
  .controller('UsersCtrl', ['ApiRequests', UsersCtrl]);
})();
