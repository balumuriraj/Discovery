'use strict';

/**
 * @ngdoc overview
 * @name discoveryApp
 * @description
 * # discoveryApp
 *
 * Main module of the application.
 */
var app = angular
  .module('discoveryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/js/angular/partials/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
