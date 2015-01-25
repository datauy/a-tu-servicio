'use strict';

angular.module('saludEnCifrasApp')
  .controller('ListingController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        $scope.providers = res.data['providers'];
        console.log($scope.providers[0].precios);
      });
  });

