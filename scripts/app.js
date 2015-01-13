'use strict';

angular
  .module('saludEnCifrasApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/listing.html',
        controller: 'ListingController'
      })
      .when('/quienes-somos', {
        templateUrl: 'views/quienes_somos.html',
        controller: 'AboutController'
      })
      .when('/comparar', {
        templateUrl: 'views/comparison.html',
        controller: 'ComparisonController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(uiSelectConfig) {
  uiSelectConfig.theme = 'select2';
  });
