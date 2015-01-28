angular.module('aTuServicioApp.services', [])
  .factory('dataService', function($http) {
    return {
      getDetails: function() {
        return $http.get('data/details.json')
      }
    }
  });
