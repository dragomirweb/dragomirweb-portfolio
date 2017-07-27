'use strict';
var angular = require("angular");
var dragomirWeb = angular.module('dragomirWeb');

dragomirWeb.directive('navi', function() {
    return {
        templateUrl: './templates/nav.html'
    };
});
