(function() {
  function HomeCtrl(ApiRequests) {
      this.ApiRequests = ApiRequests;
      // doesnt do anything yet
      // this.currentUser = ApiRequests.setCurrentUser();

      this.pass_list_id = function(list_id) {
        ApiRequests.task_return(list_id);
      }
    }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
