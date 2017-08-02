'use strict';
var angular = require("angular");
var dragomirWeb = angular.module('dragomirWeb');

dragomirWeb.directive('attachNav', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $('.button-collapse').sideNav();
    }
  };
});
dragomirWeb.directive('closeNav', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $('.navitem').click(function() {
        $('.button-collapse').sideNav('hide');
      });
    }
  };
});

dragomirWeb.directive('attachModal', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $('#contactModal').modal({
        complete: function() {
          //$(location).attr('href', '/');
          window.history.back();
        }
      });
    }
  };
});
