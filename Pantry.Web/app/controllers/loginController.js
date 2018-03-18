﻿(function(app) {

    app.controller('loginController', [
        '$scope', '$location', 'authService', function($scope, $location, authService) {

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

            $scope.close = function() {
                $scope.message = "";
            };

            $scope.logOut = authService.logOut;

            $scope.authentication = authService.authentication;

        }
    ]);

})(pantryApp);