'use strict'
var angular = require("angular");
var ngRoute = require("angular-route");
var ngMeta = require("ng-meta");

var dragomirWeb = angular.module('dragomirWeb');


dragomirWeb.config(['$routeProvider', 'ngMetaProvider', function($routeProvider, $ngMetaProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl: './templates/views/home.html',
            data: {
                meta: {
                    'title': 'DragomirWeb',
                    'subtitle': 'Servicii profesionale de IT, Web Design si Ecommerce',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/despre noi', {
            templateUrl: './templates/views/desprenoi.html',
            data: {
                meta: {
                    'title': 'Despre noi',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/portofoliu', {
            templateUrl: './templates/views/portofoliu.html',
            data: {
                meta: {
                    'title': 'Portofoliu',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/servicii', {
            templateUrl: './templates/views/servicii.html',
            data: {
                meta: {
                    'title': 'Servicii',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/intrebari si raspunsuri', {
            templateUrl: './templates/views/Q&A.html',
            data: {
                meta: {
                    'title': 'Intrebari si raspunsuri',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/contact', {
            templateUrl: './templates/views/contact.html',
            data: {
                meta: {
                    'title': 'Contact',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .otherwise({
            redirectTo: '/Home'
        });
}]).run(['ngMeta', function(ngMeta) {
    ngMeta.init();
}]);