(function() {
  function ListCtrl(ApiRequests, $cookies) {

    this.ApiRequests = ApiRequests;

    ApiRequests.list_refresh();

    this.delete_task = function(task_id){
    ApiRequests.delete_task(task_id);
  };

    this.create_task = function() {
      ApiRequests.create_task(this.task, this.list_id);
      this.task = "";
    };

  }

  angular
    .module('blocitoff')
    .controller('ListCtrl', ['ApiRequests', '$cookies', ListCtrl]);
})();
