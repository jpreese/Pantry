app.factory('recipesService', ['$http', function ($http) {

    var serviceBase = 'http://localhost:18396/';
    var recipesServiceFactory = {};

    var _getRecipes = function () {

        return $http.get(serviceBase + 'api/recipes').then(function (results) {
            return results;
        });
    };

    recipesServiceFactory.getRecies = _getRecipes;

    return recipesServiceFactory;

}]);