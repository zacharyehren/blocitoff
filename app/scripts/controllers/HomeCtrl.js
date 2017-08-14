(function() {
  function HomeCtrl(ApiRequests, $routeParams) {
      this.ApiRequests = ApiRequests;
      // doesnt do anything yet
      //this.currentUser = BloccitoffCookies.currentUser;

      this.pass_list_id = function(list_id) {
          $routeParams.id = list_id;
          ApiRequests.task_return(list_id);
      }


      this.delete_list = function() {
        var lists = ApiRequests.lists;
        for (var i = 0; i <= lists.length; i++) {
          if (document.getElementById("list_checkbox").checked) {
            console.log("test");
            // ApiRequests.delete_list(list_id);
          }
        }
      }
    }



  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', '$routeParams', HomeCtrl]);
})();
