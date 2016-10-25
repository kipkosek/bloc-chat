(function() {
    function ModalRoomCtrl($uibModalInstance, RoomService) {
        var ctrl = this;

        ctrl.createRoom = function(room) {
            RoomService.addRoom(room);
            console.log(room);
            $uibModalInstance.close();
        };
        ctrl.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

    }

    angular
        .module('blocChat')
        .controller('ModalRoomCtrl', ['$uibModalInstance', 'RoomService', ModalRoomCtrl]);
})();
