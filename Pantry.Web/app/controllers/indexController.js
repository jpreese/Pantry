(function () {
    'use strict';

    angular.module('app').controller('indexController', [
        '$scope', 'authService', function ($scope, authService) {
            $scope.authentication = authService.authentication;
            $scope.logOut = authService.logOut;
        }
    ]);

})()