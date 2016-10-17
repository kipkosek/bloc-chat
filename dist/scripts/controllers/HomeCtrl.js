(function() {
    function HomeCtrl(Room) {
        var ctrl = this;

        ctrl.title = "Bloc Chat";
        ctrl.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
