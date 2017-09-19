'use strict'
var angular = require("angular");
var ngRoute = require("angular-route");
var ngMeta = require("ng-meta");

var dragomirWeb = angular.module('dragomirWeb');


dragomirWeb.config(['$locationProvider', '$routeProvider', 'ngMetaProvider', function($locationProvider, $routeProvider, $ngMetaProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/Home', {
            templateUrl: './templates/views/home.html',
            data: {
                meta: {
                    'title': 'DragomirWeb',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/despre noi', {
            templateUrl: './templates/views/desprenoi.html',
            data: {
                meta: {
                    'title': 'Despre noi',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/portofoliu', {
            templateUrl: './templates/views/portofoliu.html',
            data: {
                meta: {
                    'title': 'Portofoliu',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        
        .when('/intrebari si raspunsuri', {
            templateUrl: './templates/views/Q&A.html',
            data: {
                meta: {
                    'title': 'Intrebari si raspunsuri',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/contact', {
            templateUrl: './templates/views/contact.html',
            data: {
                meta: {
                    'title': 'Contact',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/servicii/site de prezentare', {
            templateUrl: './templates/views/servicii/sitedeprezentare.html',
            data: {
                meta: {
                    'title': 'Site de prezentare',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/servicii/magazin online', {
            templateUrl: './templates/views/servicii/magazinonline.html',
            data: {
                meta: {
                    'title': 'Magazin Online',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/servicii/web design', {
            templateUrl: './templates/views/servicii/webdesign.html',
            data: {
                meta: {
                    'title': 'Web Design',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
                    'description': 'This is the description shown in Google search results'
                }
            }
        })
        .when('/servicii/aplicatii web', {
            templateUrl: './templates/views/servicii/aplicatii.html',
            data: {
                meta: {
                    'title': 'Aplicatii',
                    'subtitle': 'Servicii profesionale - Site de prezentare, Magazin Online, Web Design, Aplicatii web',
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