'use strict';
var angular = require("angular");
var dragomirWeb = angular.module('dragomirWeb');
var qna = require("./../data/qa.json");

dragomirWeb.controller('QController', ['$scope', function($scope) {
    $scope.qItems = qna;
}]);
