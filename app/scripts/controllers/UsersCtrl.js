(function() {
  function UsersCtrl(ApiRequests) {
    this.username = ApiRequests.users;
  }

  angular
  .module('blocitoff')
  .controller('UsersCtrl', ['ApiRequests', UsersCtrl]);
})();
