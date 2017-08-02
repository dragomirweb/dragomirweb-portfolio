'use strict';
var angular = require("angular");
var ngRoute = require("angular-route");

var dragomirWeb = angular.module('dragomirWeb', ['ngRoute']);

dragomirWeb.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl: './templates/views/home.html'
        })
        .when('/despre noi', {
            templateUrl: './templates/views/desprenoi.html'
        })
        .when('/portofoliu', {
            templateUrl: './templates/views/portofoliu.html'
        })
        .when('/servicii', {
            templateUrl: './templates/views/servicii.html'
        })
        .when('/intrebari si raspunsuri', {
            templateUrl: './templates/views/Q&A.html'
        })
        .when('/contact', {
            templateUrl: './templates/views/contact.html'
        })
        .otherwise({
            redirectTo: '/Home'
        });
}]);

require("./controllers/");
require("./directives/");
require("./services/");
