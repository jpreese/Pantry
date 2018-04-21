(function () {
    'use strict';

    angular.module('app').controller('pantryController', [
        '$scope', 'pantryService', function ($scope, pantryService) {

            $scope.pantry = [];

            $scope.$on('ingredient-added', function (event, ingredient) {
                $scope.pantry.push(ingredient);
            });

            pantryService.getPantry().then(function (results) {

                var ingredientNames = $.map(results.data, function (e) {
                    return e.name;
                });

                $scope.pantry = ingredientNames;

            }, function (error) {

            });
        }
    ]);
})();