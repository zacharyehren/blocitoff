(function() {
  function HomeCtrl(ApiRequests) {
      this.ListRequest = ApiRequests;

    }


  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
