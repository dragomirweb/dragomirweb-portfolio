'use strict';

var angular = require("angular");
var ngRoute = require("angular-route");
var ngMeta = require("ng-meta");

var dragomirWeb = angular.module('dragomirWeb', ['ngRoute', 'ngMeta']);



require("./config");
require("./controllers/");
require("./directives/");
require("./services/");

