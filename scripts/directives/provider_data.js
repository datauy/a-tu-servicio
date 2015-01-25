'use strict';

angular.module('saludEnCifrasApp')
  .directive('providerData', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/provider-data.html'
      // scope: {
      //   data: "=",
      // }
    };
  });
