(function() {
  function ListCtrl(ApiRequests) {
    this.ApiRequests = ApiRequests;
    // this.list_tasks = function() {
    //   ApiRequests.task_return();
    //   console.log(this.id);
    // }

    this.create_task = function() {
      console.log(this.ApiRequests.lists.id);
      ApiRequests.task_return(this.ApiRequests.lists.id);
      ApiRequests.create_task(this.task);
    };

  }

  angular
  .module('blocitoff')
  .controller('ListCtrl', ['ApiRequests', ListCtrl]);
})();
