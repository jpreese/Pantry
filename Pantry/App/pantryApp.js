(function() {

    var app = angular.module('pantryModule', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {

        var partialsDirectoryBase = "/App/Partials/";
        $routeProvider.when('/',
        {
            templateUrl: partialsDirectoryBase + 'Login.html'
        })
        .when('/kitchen',
        {
            templateUrl: partialsDirectoryBase + 'Kitchen.html'
        })
        .otherwise(
        {
            redirectTo: '/login'
        });

        $locationProvider.html5Mode(true);
    });

})();