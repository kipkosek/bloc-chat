(function() {
  function MessageService($firebaseArray) {
    var MessageService = {};

    var messageRef = firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);
    // var roomId = messages.roomId;

    // MessageService.all = messages;

    MessageService.getByRoomId = function(currentRoomId) {
        console.log(currentRoomId);
        return $firebaseArray(messageRef.orderByChild("roomId").equalTo(currentRoomId));
    };

    // RoomService.addRoom = function(room) {
    //   rooms.$add(room);
    // };
    return MessageService;
  }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', MessageService]);
})();
