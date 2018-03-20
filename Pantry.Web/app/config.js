(function () {
    'use strict';

    angular.module('app').config(function($routeProvider, $httpProvider) {

        var partialsDirectoryBase = '/app/partials/';
        $routeProvider.when('/login',
            {
                controller: 'loginController',
                templateUrl: partialsDirectoryBase + "login.html"
            })
            .when('/pantry',
            {
                templateUrl: partialsDirectoryBase + "pantry.html"
            })
            .when('/recipes',
            {
                controller: 'recipesController',
                templateUrl: partialsDirectoryBase + "recipes.html"
            })
            .otherwise(
            {
                redirectTo: '/login'
            });

        $httpProvider.interceptors.push('authInterceptorService');
    });

    angular.module('app').run([
        'authService', function (authService) {
            authService.fillAuthData();
        }
    ]);

    angular.module('app').constant('serviceBase', 'http://localhost:18396/');

}());