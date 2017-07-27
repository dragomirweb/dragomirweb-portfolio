'use strict';
var angular = require("angular");
var dragomirWeb = angular.module('dragomirWeb');
var data = require("./data.json");

dragomirWeb.controller('MainController', ['$scope', function($scope) {
    $scope.navItems = data;
}]);
