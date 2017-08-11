(function() {
  function HomeCtrl(ApiRequests) {
      this.ApiRequests = ApiRequests;
      // doesnt do anything yet
      //this.currentUser = BloccitoffCookies.currentUser;

      this.pass_list_id = function(list_id) {
          ApiRequests.task_return(list_id);
      }


      this.delete_list = function(list_id) {
        var lists_length = ApiRequests.lists.length;
        while (lists_length --) {
          if (document.getElementById("list_checkbox").checked = true) {
            console.log(list_id);
            // ApiRequests.delete_list(list_id);
          }
        }
      }
    }



  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
