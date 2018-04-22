(function () {
    'use strict';

    angular.module('app').controller('ingredientController', [
        '$scope', '$rootScope', 'ingredientsService', 'pantryService', function ($scope, $rootScope, ingredientsService, pantryService) {

            $scope.ingredients = [];

            ingredientsService.getIngredients().then(function (results) {
                $scope.ingredients = results;
            });
        }
    ]);
})();