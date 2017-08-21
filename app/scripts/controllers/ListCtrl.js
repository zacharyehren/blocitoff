(function() {
  function ListCtrl(ApiRequests, $cookies) {
    this.ApiRequests = ApiRequests;

    ApiRequests.list_refresh();

    this.create_task = function() {
      ApiRequests.create_task(this.task);
    }


  }

  angular
  .module('blocitoff')
  .controller('ListCtrl', ['ApiRequests', '$cookies', ListCtrl]);
})();
