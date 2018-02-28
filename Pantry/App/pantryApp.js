var app = angular.module('pantryModule', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/login',
    {
        templateUrl: '/App/Partials/Login.html'
    })
    .otherwise(
    {
        redirectTo: '/'
    });

});