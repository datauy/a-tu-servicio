'use strict';

angular.module('saludEnCifrasApp')
  .controller('ComparisonController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        var data = res.data;
        $scope.stats = data["stats"];
        $scope.providers = data["providers"];
        var provider = $scope.providers[0];
        $scope.prices_attr = Object.keys(provider.precios);
        $scope.times_attr = Object.keys(provider.tiempos_espera);
        $scope.structure_attr = Object.keys(provider.estructura);
        $scope.resources_attr = Object.keys(provider.rrhh);

        $scope.lookupByState = data["lookup_by_state"];
        $scope.states = $scope.lookupByState;
        $scope.state = {}
        $scope.selectedProvider = {}

        $scope.providersByState = function(lookupInfo) {
          if (lookupInfo) {
            return lookupInfo.providers.map(function(lookupItem) {
              return $scope.providers[lookupItem];
            });
          } else {
            return $scope.providers;
          }
        };
      });

  });

