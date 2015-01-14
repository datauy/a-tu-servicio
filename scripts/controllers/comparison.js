'use strict';

angular.module('saludEnCifrasApp')
  .controller('ComparisonController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        var data = res.data;
        $scope.stats = data["stats"];
        $scope.providers = data["providers"];

        // TODO: replace with real names
        var providerStructure = $scope.providers[0];
        $scope.prices_attr = Object.keys(providerStructure.precios);
        $scope.times_attr = Object.keys(providerStructure.tiempos_espera);
        $scope.structure_attr = Object.keys(providerStructure.estructura);
        $scope.resources_attr = Object.keys(providerStructure.rrhh);

        $scope.lookupByState = data["lookup_by_state"];
        $scope.states = $scope.lookupByState;

        $scope.state = {};
        $scope.provider = {}
        $scope.selectedProviders = [];
        $scope.maxComparedProviders = false;


        $scope.providersByState = function(lookupInfo) {
          if (lookupInfo) {
            return lookupInfo.providers.map(function(lookupItem) {
              return $scope.providers[lookupItem];
            });
          } else {
            return $scope.providers;
          }
        };

        $scope.addToComparison = function(item, model) {
          if ($scope.selectedProviders.indexOf(item) < 0) {
            $scope.selectedProviders.push(item);
            $scope.state.selected = undefined;
            $scope.provider.selected = undefined;
            $scope.maxComparedProviders = ($scope.selectedProviders.length >= 3)
          }
        }

        $scope.removeFromComparison = function(item) {
          var providerIndex = $scope.selectedProviders.indexOf(item);
          $scope.selectedProviders.splice(providerIndex, 1);
          $scope.maxComparedProviders = ($scope.selectedProviders.length >= 3)
        }
      });

  });

