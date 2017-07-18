(function() {
  function HomeCtrl(ApiRequests) {
    this.ApiRequests = ApiRequests;

    this.create_task = function() {
      ApiRequests.create_task(this.task);
    }
  }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
