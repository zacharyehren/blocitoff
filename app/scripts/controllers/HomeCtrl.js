(function() {
  function HomeCtrl(ApiRequests) {
      this.ListRequest = ApiRequests;

      this.pass_list_id = function(list_id) {
        ApiRequests.task_return(list_id);
      }
    }


  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
