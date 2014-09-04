(function() {
  'use strict';

  function MainCtrl($scope, $window) {
    var vm = this;

    this.mainThings = [
      {
        name: 'one',
        description: 'one desc'
      },
      {
        name: 'two',
        description: 'two desc'
      },
      {
        name: 'three',
        description: 'three desc'
      }
    ];

    this.geoLocation = {};

    $scope.hasLocation = false;

    this.getLocation = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        vm.geoLocation.latitude = position.coords.latitude;
        vm.geoLocation.longitude = position.coords.longitude;
        vm.geoLocation.string = "Latitude is " + vm.geoLocation.latitude.toString()
          + ", and longitude is " + vm.geoLocation.longitude.toString();
        $scope.hasLocation = true;
        return vm.geoLocation;
      });
    };

    this.speakUtterance = function(utt) {
      var saying = new SpeechSynthesisUtterance(utt);
      $window.speechSynthesis.speak(saying);
      this.utterance = '';
    };
  }

  angular.module('speechSynthesis').
    controller('MainCtrl', MainCtrl);
})();
