'use strict';
var angular = require("angular");
var ngRoute = require("angular-route");
var dragomirWeb = angular.module('dragomirWeb');

dragomirWeb.controller('MainController', ['$scope', '$http', '$location', function($scope, $http, $location) {

$scope.copy = function(){
    var today = new Date();
    var year = today.getFullYear();
    return year + ' DragomirWeb.com';
};

$scope.isActive = function(viewLocation){
    var view = viewLocation.toString();
    var active = (view === $location.path());
     return active;
}

    // $http({
    //     method: 'GET',
    //     url: root + '/posts'
    // }).then(function successCallback(response) {
    //     $scope.posts = response.data;
    // }, function errorCallback(response) {
    //     console.log(response);
    // });
    
}]);
