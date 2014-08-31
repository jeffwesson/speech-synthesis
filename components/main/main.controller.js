(function() {
  'use strict';

  function MainCtrl() {
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

    this.utterance = '';

    this.speakUtterance = function() {
      var saying = new SpeechSynthesisUtterance(this.utterance);
      window.speechSynthesis.speak(saying);
    };
  }

  angular.module('speechSynthesis')
    .controller('MainCtrl', MainCtrl);
})();
