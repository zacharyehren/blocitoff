(function() {
  function HomeCtrl(ApiRequests) {
      this.ApiRequests = ApiRequests;

    }


  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
