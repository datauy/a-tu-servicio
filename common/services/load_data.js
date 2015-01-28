angular.module('aTuServicioApp.services', [])
  .factory('dataService', function($http) {
    var data = null;
    // var _promise = (_data !== null) ? _data : $http.get('data/details.json').success(function(data) {
    //   _data = data.result;
    // });

    return {
      loadData: function() {
        return data;
      },

      getDetails: function() {
        return $http.get('data/details.json')
      }
    }
  });
