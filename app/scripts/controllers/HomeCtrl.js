(function() {
    function HomeCtrl($uibModal, RoomService, MessageService) {
        var ctrl = this;

        ctrl.title = "Bloc Chat";
        ctrl.rooms = RoomService.all;
        ctrl.currentRoom = null;
        ctrl.messages = null;

        ctrl.open = function() {
            $uibModal.open({
                templateUrl: '/templates/modalroom.html',
                controller: 'ModalRoomCtrl as modalroom'
            });
        };

        ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
            console.log(room.name);
            ctrl.messages = MessageService.getByRoomId(room.$id);
            console.log(ctrl.messages);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'RoomService', 'MessageService', HomeCtrl]);
})();
