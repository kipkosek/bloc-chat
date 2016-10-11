(function() {
    function HomeCtrl() {
      console.log("home");
        this.title = "Bloc Chat";
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
