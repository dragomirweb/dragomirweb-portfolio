'use strict';
var angular = require("angular");
var dragomirWeb = angular.module('dragomirWeb');
var nav = require("./../data/menu.json");

dragomirWeb.controller('NavController', ['$scope', function($scope) {
    $scope.navItems = nav;

}]);

