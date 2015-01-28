angular.module('aTuServicioApp.comparison', ['aTuServicioApp.services', 'ui.select'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comparar', {
    templateUrl: 'comparison/comparison.tpl.html',
    controller: 'ComparisonController',
  })
}])

.controller('ComparisonController', function ($scope, dataService) {
  dataService.getDetails().then(function(res) {
    // TODO: repeated code from home and comparison
    var data = res.data;
    $scope.providers = data['providers'];

    $scope.states = data['lookup_by_state'];
    $scope.states.splice(0, 0, {name: "Todo el país"});
    $scope.state = {};
    $scope.provider = {}
    $scope.providersByState = function(lookupInfo) {
      if (lookupInfo && lookupInfo.name != "Todo el país" ) {
        return lookupInfo.providers.map(function(lookupItem) {
          return $scope.providers[lookupItem];
        });
      } else {
        return $scope.providers;
      }
    };
    // end repeated code

    var MAX_PROVIDERS_COMPARED = 3;
    $scope.selectedProviders = [];
    $scope.maxComparedProviders = { "warning": false, "show": false };

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
