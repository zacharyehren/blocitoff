(function() {
  function HomeCtrl(ApiRequests) {
    console.log("in home controller");

    this.create_task = function() {
      ApiRequests.task_request;
    }

    console.log(ApiRequests);
  }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
