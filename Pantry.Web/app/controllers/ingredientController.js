(function () {
    'use strict';

    angular.module('app').controller('ingredientController', [
        '$scope', 'ingredientsService', 'pantryService', function ($scope, ingredientsService, pantryService) {

            $scope.ingredients = [];

            ingredientsService.getIngredients().then(function (results) {

                var ingredientNames = $.map(results.data, function(e) {
                    return { label: e.name, value: e.name, id: e.ingredientId };
                });

                $("#ingredientList").autocomplete({
                    source: ingredientNames,
                    select: function(event, ui) {
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