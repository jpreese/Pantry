var app = angular.module("pantryModule", ["ngRoute", "LocalStorageModule"]);

app.config(function($routeProvider, $locationProvider, $httpProvider) {

    var partialsDirectoryBase = "/app/partials/";
    $routeProvider.when("/",
    {
        controller: "loginController",
        templateUrl: partialsDirectoryBase + "login.html"
    })
    .when("/pantry",
    {
        templateUrl: partialsDirectoryBase + "pantry.html"
    })
    .otherwise(
    {
        redirectTo: "/"
    });

    $locationProvider.html5Mode(
    {
        enabled: true,
        requireBase: false
    });

    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

