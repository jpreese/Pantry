(function () {
    'use strict';

    angular.module('app').controller('ingredientController', [
        '$scope', '$rootScope', 'ingredientsService', 'pantryService', function ($scope, $rootScope, ingredientsService, pantryService) {

            $scope.ingredients = [];

            ingredientsService.getIngredients().then(function (results) {

                $("#ingredientList").autocomplete({
                    source: results,
                    select: function (event, ui) {

                        pantryService.postIngredient(ui.item.id);
                        $(this).val("");

                        return false;
                    }
                });
            }, function (error) {

            });
        }
    ]);
})();