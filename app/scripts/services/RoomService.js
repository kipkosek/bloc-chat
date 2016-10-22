(function() {
  function RoomService($firebaseArray) {
    var RoomService = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    RoomService.all = rooms;

    RoomService.addRoom = function(room) {
      rooms.$add(room);
    };

    return RoomService;
  }

  angular
    .module('blocChat')
    .factory('RoomService', ['$firebaseArray', RoomService]);
})();
