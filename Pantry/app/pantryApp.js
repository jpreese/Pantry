(function() {

    var app = angular.module("pantryModule", ["ngRoute"]);

    app.config(function($routeProvider, $locationProvider) {

        var partialsDirectoryBase = "/app/partials/";
        $routeProvider.when("/",
        {
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

})();