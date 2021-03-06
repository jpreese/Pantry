﻿(function () {
    'use strict';

    angular.module('app').factory('pantryService', [
        '$http', '$rootScope', 'serviceBase', function ($http, $rootScope, serviceBase) {

            var pantryServiceFactory = {};

            var getPantry = function () {
                return $http.get(serviceBase + 'api/pantry').then(function (results) {
                    return results.data;
                });
            };

            var postIngredient = function (id) {
                $http.post(serviceBase + 'api/pantry/' + id).success(function (data) {
                    $rootScope.$broadcast('ingredient-added', data);
                });
            }

            var deleteIngredient = function(id) {
                $http.delete(serviceBase + 'api/pantry/' + id).success(function (data) {
                    $rootScope.$broadcast('ingredient-deleted', data);
                });
            }

            pantryServiceFactory.getPantry = getPantry;
            pantryServiceFactory.postIngredient = postIngredient;
            pantryServiceFactory.deleteIngredient = deleteIngredient;

            return pantryServiceFactory;
        }
    ]);
})();