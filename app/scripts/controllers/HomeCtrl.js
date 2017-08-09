(function() {
  function HomeCtrl(ApiRequests, BlocitoffCookies) {
      this.ApiRequests = ApiRequests;
      // doesnt do anything yet
      //this.currentUser = BloccitoffCookies.currentUser;

      this.pass_list_id = function(list_id) {
        ApiRequests.task_return(list_id);
      }
    }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', 'BlocitoffCookies', HomeCtrl]);
})();
