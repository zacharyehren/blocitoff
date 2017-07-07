(function() {
  function UsersCtrl(ApiRequests) {
    console.log("in controller");
    this.users = ApiRequests;
    console.log(ApiRequests);
  }

  angular
  .module('blocitoff')
  .controller('UsersCtrl', ['ApiRequests', UsersCtrl]);
})();
