(function() {
  function MessageService($firebaseArray) {
    var MessageService = {};

    var messageRef = firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);

    MessageService.getByRoomId = function(currentRoomId) {
        console.log(currentRoomId);
        return $firebaseArray(messageRef.orderByChild("roomId").equalTo(currentRoomId));
    };

// Firebase.ServerValue.TIMESTAMP

    return MessageService;
  }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', MessageService]);
})();
