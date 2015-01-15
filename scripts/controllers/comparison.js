'use strict';

angular.module('saludEnCifrasApp')
  .controller('ComparisonController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        var data = res.data;
        var MAX_PROVIDERS_COMPARED = 3;
        $scope.stats = data["stats"];
        $scope.providers = data["providers"];


        // TODO: replace with real names
        var providerStructure = $scope.providers[0];
        $scope.prices_attr = Object.keys(providerStructure.precios);
        $scope.times_attr = Object.keys(providerStructure.tiempos_espera);
        $scope.structure_attr = Object.keys(providerStructure.estructura);
        $scope.resources_attr = Object.keys(providerStructure.rrhh);

        $scope.lookupByState = data["lookup_by_state"]
        $scope.lookupByState.splice(0, 0, {name: "Todo el país"});
        $scope.states = $scope.lookupByState;

        $scope.state = {};
        $scope.provider = {}
        $scope.selectedProviders = [];
        $scope.maxComparedProviders = { "warning": false, "show": false };


        $scope.providersByState = function(lookupInfo) {
          if (lookupInfo && lookupInfo.name != "Todo el país" ) {
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
            $scope.checkMaxComparedProviders();
          }
        }

        $scope.removeFromComparison = function(item) {
          var providerIndex = $scope.selectedProviders.indexOf(item);
          $scope.selectedProviders.splice(providerIndex, 1);
          $scope.checkMaxComparedProviders();
        }

        // this checks if you reached the limit (MAX_PROVIDERS_COMPARED)
        // of institutions you can compare
        // TODO: make MAX_PROVIDERS_COMPARE = 3 a configurable parameter
        $scope.checkMaxComparedProviders = function() {
          $scope.maxComparedProviders.warning = ($scope.selectedProviders.length >= 3)
          $scope.maxComparedProviders.show = $scope.maxComparedProviders.warning;
        }

        $scope.markAsRead = function() {
          $scope.maxComparedProviders.show = false;
        }

        $scope.showWarning = function() {
          // console.log("warning", $scope.maxComparedProviders.warning);
          // console.log("show", $scope.maxComparedProviders.show);
          return $scope.maxComparedProviders.warning && $scope.maxComparedProviders.show;
        }
      });

  });

