(function () {
    'use strict';

    angular.module('app').factory('pantryService', [
        '$http', 'serviceBase', function ($http, serviceBase) {

            var pantryServiceFactory = {};

            var getPantry = function () {
                return $http.get(serviceBase + 'api/pantry').then(function (results) {
                    return results.data;
                });
            };

            var postIngredient = function (id) {
                $http.post(serviceBase + 'api/pantry/' + id).success(function (data, status) { });
            }

            pantryServiceFactory.getPantry = getPantry;
            pantryServiceFactory.postIngredient = postIngredient;

            return pantryServiceFactory;
        }
    ]);
})()