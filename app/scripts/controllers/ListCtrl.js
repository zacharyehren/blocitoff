(function() {
  function ListCtrl(ApiRequests, $timeout, $cookies) {

    this.ApiRequests = ApiRequests;

    ApiRequests.list_refresh();

    this.delete_task = function(task_id){
    ApiRequests.delete_task(task_id);
  };

    this.hide_task = function(task_id){
      if (task_id != null) {
        $timeout(function(){
          ApiRequests.delete_task(task_id)
        }, 2000);
      }
    }

    this.create_task = function() {
      ApiRequests.create_task(this.task, this.list_id);
      this.task = "";
    };

  }

  angular
    .module('blocitoff')
    .controller('ListCtrl', ['ApiRequests', '$timeout', '$cookies', ListCtrl]);
})();
