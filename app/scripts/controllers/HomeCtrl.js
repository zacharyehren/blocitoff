(function() {
  function HomeCtrl(ApiRequests) {

    this.create_task = function() {
      ApiRequests.create_task(this.task);
    }

    this.list_tasks = ApiRequests.list_tasks();

  }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
