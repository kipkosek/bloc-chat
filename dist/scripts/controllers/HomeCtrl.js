(function() {
    function HomeCtrl($uibModal, RoomService, MessageService, UserService, $cookies) {
        var ctrl = this;

        ctrl.title = "Bloc Chat";
        ctrl.rooms = RoomService.all;
        ctrl.currentRoom = null;
        ctrl.messages = null;
        ctrl.users = UserService.all;

        ctrl.open = function() {
            $uibModal.open({
                templateUrl: '/templates/modalroom.html',
                controller: 'ModalRoomCtrl as modalroom'
            });
        };

        ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
            ctrl.messages = MessageService.getByRoomId(room.$id);
        };

        ctrl.sendMessage = function(message) {
            message.username = $cookies.get('blocChatCurrentUser');
            message.roomId = ctrl.currentRoom.$id;
            MessageService.send(message);
        };

        ctrl.disconnect = function() {
            UserService.disconnect();
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'RoomService', 'MessageService', 'UserService', '$cookies', HomeCtrl]);
})();
