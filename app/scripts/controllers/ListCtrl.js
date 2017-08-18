(function() {
  function ListCtrl(ApiRequests, $routeParams, $timeout) {

    this.ApiRequests = ApiRequests;

    this.list_id = $routeParams.id;

    this.delete_task = function(task_id){
    ApiRequests.delete_task(task_id);
  };

    this.hide_task = function(task_id){
      $timeout(function(){
        ApiRequests.delete_task(task_id)
      }, 86400);
    }

    this.create_task = function() {
      ApiRequests.create_task(this.task, this.list_id);
      console.log(ApiRequests.tasks);
      this.task = "";
    };

  }

  angular
    .module('blocitoff')
    .controller('ListCtrl', ['ApiRequests', '$routeParams', '$timeout', ListCtrl]);
})();
