(function() {
  'use strict';

  function MainCtrl($window, $timeout, $log) {
    var god = this;

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

    this.getLocation = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        god.geoLocation.latitude = position.coords.latitude;
        god.geoLocation.longitude = position.coords.longitude;
        god.geoLocation.string = "Latitude is " + god.geoLocation.latitude.toString() + ", and longitude is " + god.geoLocation.longitude.toString();
        console.log(god.geoLocation);
        return god.geoLocation;
      });
    };

    this.speakUtterance = function(utt) {
      var saying = new SpeechSynthesisUtterance(utt);
      $window.speechSynthesis.speak(saying);
      this.utterance = '';
      console.log(god.geoLocation.string);
    };
  }

  angular.module('speechSynthesis')
    .controller('MainCtrl', MainCtrl);
})();
