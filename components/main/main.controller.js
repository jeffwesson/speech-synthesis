(function() {
  'use strict';

  function MainCtrl($window) {
    var that = this;

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
        that.geoLocation.latitude = position.coords.latitude;
        that.geoLocation.longitude = position.coords.longitude;
        that.geoLocation.string = "Latitude is " + that.geoLocation.latitude.toString() + ", and longitude is " + that.geoLocation.longitude.toString();
        console.log(that.geoLocation);
        return that.geoLocation;
      });
    };

    this.speakUtterance = function(utt) {
      var saying = new SpeechSynthesisUtterance(utt);
      $window.speechSynthesis.speak(saying);
      this.utterance = '';
      console.log(that.geoLocation.string);
    };
  }

  angular.module('speechSynthesis')
    .controller('MainCtrl', MainCtrl);
})();
