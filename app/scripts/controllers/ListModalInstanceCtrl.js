(function() {
  function ListModalInstanceCtrl($uibModalInstance) {
    this.newList = function() {
      $uibModalInstance.close(this.listName);
    };

    this.cancelModal = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
  angular
    .module('blocitoff')
    .controller('ListModalInstanceCtrl', ['$uibModalInstance', ListModalInstanceCtrl]);
})();
