var app = angular.module('pantryModule', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/login',
    {
        templateUrl: '/App/Partials/Login.html'
    })
    .otherwise(
    {
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});