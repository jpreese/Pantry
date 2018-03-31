(function () {
    'use strict';

    angular.module('app').factory('recipesService', [
        '$http', 'serviceBase', function ($http, serviceBase) {

            var recipesServiceFactory = {};

            var getRecipes = function() {

                return $http.get(serviceBase + 'api/recipes').then(function(results) {
                    return results;
                });

            };

            recipesServiceFactory.getRecipes = getRecipes;

            return recipesServiceFactory;
        }
    ]);

})();