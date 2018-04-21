(function () {
    'use strict';

    angular.module('app').controller('loginController', [
        '$scope', '$location', 'authService', function($scope, $location, authService) {

            if (authService.authentication.isAuth) {
                $location.path('/pantry');
            }

            $scope.loginData = {
                userName: "",                               
                password: ""
            };

            $scope.message = "";

            $scope.login = function() {

                authService.login($scope.loginData).then(function(response) {

                        $location.path('/pantry');

                    },
                    function(err) {
                        $scope.message = err.error_description;
                    });
            };
        }
    ]);
})();