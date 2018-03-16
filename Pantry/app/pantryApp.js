var app = angular.module("pantryModule", ["ngRoute", "LocalStorageModule"]);

app.config(function($routeProvider, $locationProvider) {

    var partialsDirectoryBase = "/app/partials/";
    $routeProvider.when("/",
    {
        controller: "loginController",
        templateUrl: partialsDirectoryBase + "login.html"
    })
    .when("/kitchen",
    {
        templateUrl: partialsDirectoryBase + "kitchen.html"
    })
    .otherwise(
    {
        redirectTo: "/login"
    });

    $locationProvider.html5Mode(
    {
        enabled: true,
        requireBase: false
    });
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);