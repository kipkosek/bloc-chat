(function() {
    function HomeCtrl($uibModal, RoomService) {
        var ctrl = this;

        ctrl.title = "Bloc Chat";
        ctrl.rooms = RoomService.all;

        ctrl.open = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'RoomService', HomeCtrl]);
})();
