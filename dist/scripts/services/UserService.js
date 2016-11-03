(function() {
    function UserService($firebaseArray, $cookies) {
      var UserService = {};

      var currentUser = $cookies.get('blocChatCurrentUser');
      var userRef = firebase.database().ref().child("presence/" + currentUser);
      var listRef = firebase.database().ref().child("presence");
      var users = $firebaseArray(listRef);

      UserService.currentUser = $cookies.get('blocChatCurrentUser');
      UserService.all = users;
      UserService.connect = function(name) {
          users.$add(name).then(function(ref) {
              UserService.currentUserId = ref.key;
              UserService.currentUser = users.$getRecord(UserService.currentUserId);
          });
          $cookies.put('blocChatCurrentUser', name);
      }

      UserService.disconnect = function() {
          users.$remove(UserService.currentUser);
          $cookies.put('blocChatCurrentUser', "");
      }

      return UserService;
    }

    angular
      .module('blocChat')
      .factory('UserService', ['$firebaseArray', '$cookies', UserService]);
})();
