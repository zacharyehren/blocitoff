(function() {
  function ListCtrl(ApiRequests) {
    this.ApiRequests = ApiRequests;

    // this.list_tasks = function() {
    //   ApiRequests.task_return();
    //   console.log(this.id);
    // }

    this.create_task = function() {
      ApiRequests.create_task(this.task);
    }

  }

  angular
  .module('blocitoff')
  .controller('ListCtrl', ['ApiRequests', ListCtrl]);
})();
