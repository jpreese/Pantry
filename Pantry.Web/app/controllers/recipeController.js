(function (app) {

    app.controller('recipesController', [
        '$scope', 'recipesService', function($scope, recipesService) {

            $scope.recipes = [];

            recipesService.getRecipes().then(function(results) {
                $scope.recipes = results.data;
            }, function(error) {

            });
        }
    ]);

})(pantryApp);