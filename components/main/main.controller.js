(function() {
  'use strict';

  function MainCtrl($window, $timeout, $log) {
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

    this.position = {};

    this.getLocation = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        $log.log(position.coords.latitude);
        $log.log(position.coords.longitude);
      });
    };

    this.utterance = '';

    this.speakUtterance = function() {
      var saying = new SpeechSynthesisUtterance(this.utterance);
      $window.speechSynthesis.speak(saying);
      $timeout($window.speechSynthesis.speak(this.position.latitude.toString()), 2000);
      $timeout($window.speechSynthesis.speak(this.position.longitude.toString()), 2000);
    };
  }

  angular.module('speechSynthesis')
    .controller('MainCtrl', MainCtrl);
})();
