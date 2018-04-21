(function () {
    'use strict';

    angular.module('app').controller('pantryController', [
        '$scope', 'pantryService', function ($scope, pantryService) {

            $scope.pantry = [];

            $scope.$on('ingredient-added', function (event, ingredient) {
                $scope.pantry.push(ingredient);
            });

            pantryService.getPantry().then(function (results) {
                $scope.pantry = results;
            }, function (error) {

            });
        }
    ]);
})();