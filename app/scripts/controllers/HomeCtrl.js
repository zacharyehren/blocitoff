(function() {
  function HomeCtrl(ApiRequests, $cookies) {
      this.ApiRequests = ApiRequests;

      ApiRequests.user_signed_in();

      this.pass_list_id = function(list_id) {
          $cookies.put('blocitoffListId', list_id);
          ApiRequests.task_return();
      }

      this.delete_list = function(list_id) {
        ApiRequests.delete_list(list_id);
      }
    }



  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', '$cookies', HomeCtrl]);
})();
