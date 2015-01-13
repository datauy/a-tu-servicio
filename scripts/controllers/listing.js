'use strict';

angular.module('saludEnCifrasApp')
  .controller('ListingController', function ($scope, $http) {
    $http.get('data/listing.json')
      .then(function(res) {
        $scope.providers = res.data['providers'];
      });
  });

