(function () {
    'use strict';

    angular.module('app').factory('ingredientsService', [
        '$http', 'serviceBase', function ($http, serviceBase) {

            var ingredientsServiceFactory = {};

            var getIngredients = function () {

                return $http.get(serviceBase + 'api/ingredients').then(function (results) {
                    return results;
                });

            }

            ingredientsServiceFactory.getIngredients = getIngredients;

            return ingredientsServiceFactory;
        }
    ]);
})()