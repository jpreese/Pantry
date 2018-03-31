(function () {
    'use strict';

    angular.module('app').controller('ingredientController', [
        '$scope', 'ingredientsService', function ($scope, ingredientsService) {

            $scope.ingredients = [];

            ingredientsService.getIngredients().then(function (results) {
                $scope.ingredients = results.data;
            }, function (error) {

            });
        }
    ]);
})();