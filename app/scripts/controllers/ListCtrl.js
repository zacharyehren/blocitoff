(function() {
  function ListCtrl(ApiRequests) {
    this.ApiRequests = ApiRequests;

    this.create_task = function() {
      ApiRequests.create_task(this.task);
    }
  }

  angular
  .module('blocitoff')
  .controller('ListCtrl', ['ApiRequests', ListCtrl]);
})();
