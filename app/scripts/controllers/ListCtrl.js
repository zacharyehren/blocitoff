(function() {
  function ListCtrl(TasksApiRequests, $cookies) {

    this.TasksApiRequests = TasksApiRequests;

    TasksApiRequests.list_refresh();

    this.delete_task = function(task_id){
    TasksApiRequests.delete_task(task_id);
  };

    this.create_task = function() {
      TasksApiRequests.create_task(this.task, this.list_id);
      this.task = "";
    };

  }

  angular
    .module('blocitoff')
    .controller('ListCtrl', ['TasksApiRequests', '$cookies', ListCtrl]);
})();
