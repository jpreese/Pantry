(function () {
    'use strict';

    angular.module('app').factory('ingredientsService', [
        '$http', 'serviceBase', 'localStorageService', function ($http, serviceBase, localStorageService) {

            var ingredientsServiceFactory = {};

            var getIngredients = function() {

                return $http.get(serviceBase + 'api/ingredients').then(function(results) {
                    return results;
                });

            };

            var getUserIngredients = function () {
                var id = localStorageService.get('authorizationData').userId;
                return $http.get(serviceBase + 'api/ingredients?userId=' + id).then(function(results) {
                    return results;
                });
            };

            ingredientsServiceFactory.getIngredients = getIngredients;
            ingredientsServiceFactory.getUserIngredients = getUserIngredients;

            return ingredientsServiceFactory;
        }
    ]);
})()