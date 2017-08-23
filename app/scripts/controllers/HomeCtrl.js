(function() {
  function HomeCtrl(ListsApiRequests, $cookies) {
      this.ApiRequests = ListsApiRequests;

      ListsApiRequests.user_signed_in();

      this.pass_list_id = function(list_id) {
          $cookies.put('blocitoffListId', list_id);
          ListsApiRequests.task_return();
      }

      this.delete_list = function(list_id) {
        ListsApiRequests.delete_list(list_id);
      }

      this.user_sign_out = function() {
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function (value, key) {
          $cookies.remove(key);
        });
        location.reload();
      }
    }



  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ListsApiRequests', '$cookies', HomeCtrl]);
})();
