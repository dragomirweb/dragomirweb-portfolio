'use strict';
var angular = require("angular");
var dragomirWeb = angular.module('dragomirWeb');

dragomirWeb.directive('navigation', function() {
    return {
        restrict: 'E',
        templateUrl: './templates/nav.html'
    };
});