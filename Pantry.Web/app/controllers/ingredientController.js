(function () {
    'use strict';

    angular.module('app').controller('ingredientController', [
        '$scope', 'ingredientsService', function ($scope, ingredientsService) {

            $scope.ingredients = [];
            $scope.userIngredients = [];

            ingredientsService.getIngredients().then(function (results) {

                var ingredientNames = $.map(results.data, function(e) {
                    return e.name;
                });

                $("#ingredientList").autocomplete({ source: ingredientNames });
            }, function (error) {

            });

            ingredientsService.getUserIngredients().then(function (results) {

                var ingredientNames = $.map(results.data, function (e) {
                    return e.name;
                });

                $scope.userIngredients = ingredientNames;

            }, function (error) {

            });
        }
    ]);
})();