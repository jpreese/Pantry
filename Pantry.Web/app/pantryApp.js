(function() {

    window.pantryApp = angular.module("pantryModule", ["ngRoute", "LocalStorageModule"]);

    pantryApp.config(function($routeProvider, $locationProvider, $httpProvider) {

        var partialsDirectoryBase = "/app/partials/";
        $routeProvider.when("/login",
        {
            controller: "loginController",
            templateUrl: partialsDirectoryBase + "login.html"
        })
        .when("/pantry",
        {
            templateUrl: partialsDirectoryBase + "pantry.html"
        })
        .when("/recipes",
        {
            controller: "recipesController",
            templateUrl: partialsDirectoryBase + "recipes.html"
        })
        .otherwise(
        {
            redirectTo: "/login"
        });

        $httpProvider.interceptors.push('authInterceptorService');
    });

    pantryApp.run([
        'authService', function(authService) {
            authService.fillAuthData();
        }
    ]);

})();

