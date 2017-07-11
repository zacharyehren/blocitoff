(function() {
  function HomeCtrl(ApiRequests) {
    console.log("in home controller");

    this.create_task = function() {
      //How do I pass this.task to this function from home.html?
      ApiRequests.task_request;
    }

    console.log(ApiRequests);
  }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
