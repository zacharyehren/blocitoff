(function() {
  function HomeCtrl(ApiRequests) {
      this.lists = ApiRequests;
      //I also tried   this.lists = ApiRequests.lists;  but that didn't work either
    }


  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['ApiRequests', HomeCtrl]);
})();
