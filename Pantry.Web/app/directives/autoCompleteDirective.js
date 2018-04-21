(function () {
    'use strict';

    angular.module('app').directive('autoComplete', [
        'ingredientsService', function (ingredientsService) {

            return {
                link: function (scope, elem, attr, ctrl) {
                    elem.autocomplete({
                        source: ingredientsService.getIngredients()
                    });
                }
            };

        }
    ]);
})();