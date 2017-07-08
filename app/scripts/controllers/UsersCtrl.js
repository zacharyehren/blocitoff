(function() {
  function UsersCtrl(ApiRequests) {
    console.log("in controller");
    this.users = ApiRequests.users;
    console.log(ApiRequests.users);
  }

  angular
  .module('blocitoff')
  .controller('UsersCtrl', ['ApiRequests', UsersCtrl]);
})();
