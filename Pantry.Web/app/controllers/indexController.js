﻿(function (app) {

    app.controller('indexController', [
        '$scope', 'authService', function ($scope, authService) {
            $scope.authentication = authService.authentication;
        }
    ]);

})(pantryApp)