(function() {
  function HomeCtrl(ListsApiRequests, $cookies, UsersApiRequests) {
      UsersApiRequests.user_signed_in();

      this.ListsApiRequests = ListsApiRequests;

      this.pass_list_id = function(list_id) {
          $cookies.put('blocitoffListId', list_id);
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
  .controller('HomeCtrl', ['ListsApiRequests', '$cookies', 'UsersApiRequests', HomeCtrl]);
})();
