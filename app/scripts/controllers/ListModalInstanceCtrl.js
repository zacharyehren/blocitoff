(function() {
  function ListModalInstanceCtrl($uibModalInstance) {
    this.newList = function() {
      $uibModalInstance.close(this.list_name);
    };

    this.cancelModal = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
  angular
    .module('blocitoff')
    .controller('ListModalInstanceCtrl', ['$uibModalInstance', ListModalInstanceCtrl]);
})();
