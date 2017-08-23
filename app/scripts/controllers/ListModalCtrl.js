(function(){
  function ListModalCtrl(ListsApiRequests, $uibModal) {

    this.openModal = function() {
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/templates/listModal.html',
        controller: 'ListModalInstanceCtrl',
        controllerAs: 'listModal'
      });

      modalInstance.result.then(
        function(list_name) {
          ListsApiRequests.create_list(list_name);
        }
      )
    };
  }
  angular
    .module('blocitoff')
    .controller('ListModalCtrl', ['ListsApiRequests', '$uibModal', ListModalCtrl]);
})();
