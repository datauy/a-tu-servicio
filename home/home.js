angular.module('aTuServicioApp.home', ['aTuServicioApp.services', 'ui.select'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.tpl.html',
    controller: 'HomeController',
  })
}])

.controller('HomeController', function($scope, dataService) {
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
  });
});
