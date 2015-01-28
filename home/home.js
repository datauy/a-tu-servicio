angular.module('aTuServicioApp.home', ['aTuServicioApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.tpl.html',
    controller: 'HomeController',
  })
}])

.controller('HomeController', function($scope, dataService) {
  dataService.getDetails().then(function(res) {
    $scope.data = res.data;
    $scope.providers = $scope.data['providers'];
    $scope.lookup = $scope.data['lookup_by_state'];
  });
});
