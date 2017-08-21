(function() {
  function HomeCtrl(ApiRequests) {
      this.ApiRequests = ApiRequests;

      ApiRequests.user_signed_in();

      this.pass_list_id = function(list_id) {
        ApiRequests.task_return(list_id);
      }
    }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
