'use strict';
var angular = require("angular");
var dragomirWeb = angular.module('dragomirWeb');

dragomirWeb.directive('modalContact', function() {
    return {
        restrict: 'E',
        templateUrl: './templates/modules/modal-contact.html'
    };
});