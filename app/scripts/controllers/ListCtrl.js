(function() {
  function ListCtrl(ApiRequests, $routeParams) {

    this.ApiRequests = ApiRequests;

    this.list_id = $routeParams.id;


    this.create_task = function() {
      ApiRequests.create_task(this.task, this.list_id);
      this.task = "";
    };

  }

  angular
    .module('blocitoff')
    .controller('ListCtrl', ['ApiRequests', '$routeParams', ListCtrl]);
})();
