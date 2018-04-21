(function () {
    'use strict';

    angular.module('app').factory('ingredientsService', [
        '$http', 'serviceBase', function ($http, serviceBase) {

            var ingredientsServiceFactory = {};

            var getIngredients = function () {

                return $http.get(serviceBase + 'api/ingredients').then(function (results) {

                    var ingredients = $.map(results.data, function (e) {
                        return { label: e.name, value: e.name, id: e.ingredientId };
                    });

                    return ingredients;
                });

            };

            ingredientsServiceFactory.getIngredients = getIngredients;

            return ingredientsServiceFactory;
        }
    ]);
})();