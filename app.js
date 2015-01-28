'use strict';

angular
  .module('aTuServicioApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.select',
    'aTuServicioApp.home',
    'aTuServicioApp.comparison'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/quienes-somos', {
      //   templateUrl: 'views/quienes_somos.html',
      //   controller: 'AboutController'
      // })
      // .otherwise({
      //   redirectTo: '/#'
      // });
  }).config(function(uiSelectConfig) {
  uiSelectConfig.theme = 'select2';
  });
