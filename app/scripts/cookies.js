(function() {
    function BlocChatCookies($cookies, $uibModal, UserService) {
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: 'templates/modaluser.html',
                controller: function ($scope, $cookies, $uibModalInstance) {

                    $scope.setUser = function(username) {
                        if (username && username !== '') {
                            $cookies.put('blocChatCurrentUser', username);
                            UserService.connect(username);
                            $uibModalInstance.close();
                        } else {
                            $scope.errorMessage = "Invalid Username";
                        }
                    };
                }
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', 'UserService', BlocChatCookies]);
})();
