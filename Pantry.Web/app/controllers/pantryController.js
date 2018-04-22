(function () {
    'use strict';

    angular.module('app').controller('pantryController', [
        '$scope', 'pantryService', function ($scope, pantryService) {

            $scope.pantry = [];

            $scope.$on('ingredient-added', function (event, ingredient) {
                $scope.pantry.push(ingredient);
            });

            $scope.$on('ingredient-deleted', function(event, ingredient) {
                var index = $scope.pantry.indexOf(ingredient);
                $scope.pantry.splice(index, 1);
            });

            pantryService.getPantry().then(function(results) {
                $scope.pantry = results;
            });

            $scope.deleteIngredient = function(id) {
                pantryService.deleteIngredient(id);
            }
        }
    ]);
})();