(function () {
    'use strict';

    angular.module('app').controller('pantryController', [
        '$scope', 'pantryService', function ($scope, pantryService) {

            $scope.pantry = [];

            var findIngredientInScope = function (ingredientId) {
                var index = -1;
                for (var x = 0; x < $scope.pantry.length; x++) {
                    if ($scope.pantry[x].ingredientId === ingredientId) {
                        return x;
                    }
                }
                return index;
            }

            $scope.$on('ingredient-added', function (event, ingredient) {
                $scope.pantry.push(ingredient);
            });

            $scope.$on('ingredient-deleted', function (event, ingredient) {
                var index = findIngredientInScope(ingredient.ingredientId);
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