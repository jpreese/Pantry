(function () {
    'use strict';

    angular.module('app').directive('autoComplete', [
        'ingredientsService', 'pantryService', function (ingredientsService, pantryService) {

            return {
                link: function (scope, elem, attr, ctrl) {
                    $(elem).autocomplete({

                        source: scope.$watch('ingredients', function() {
                            $(elem).autocomplete({ source: scope.ingredients });
                        }),

                        select: function (event, ui) {

                            pantryService.postIngredient(ui.item.id);
                            $(this).val("");

                            return false;
                        }
                    });
                }
            };
        }
    ]);
})();