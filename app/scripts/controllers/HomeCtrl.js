(function() {
  function HomeCtrl(ApiRequests) {

    this.create_task = function() {
      ApiRequests.create_task(this.task);
    }

    this.tasks = ApiRequests.tasks;
    console.log(ApiRequests.tasks);
  }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
