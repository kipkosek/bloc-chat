(function() {
  function MessageService($firebaseArray) {
    var MessageService = {};

    var messageRef = firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);

    MessageService.getByRoomId = function(currentRoomId) {
        return $firebaseArray(messageRef.orderByChild("roomId").equalTo(currentRoomId));
    };

    MessageService.send = function(message)  {
        messages.$add({text: message.text,
                      roomId: message.roomId,
                      username: message.username,
                      createdAt: firebase.database.ServerValue.TIMESTAMP
                    });
    };

    return MessageService;
  }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', MessageService]);
})();
