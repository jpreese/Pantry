(function () {
    'use strict';

    angular.module('app').controller('recipeController', [
        '$scope', 'recipesService', function ($scope, recipesService) {

            $scope.recipes = [];

            recipesService.getRecipes().then(function (results) {
                $scope.recipes = results.data;
            }, function (error) {

            });
        }
    ]);

})();