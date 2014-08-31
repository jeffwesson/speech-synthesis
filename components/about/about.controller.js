(function() {
  'use strict';

  function AboutCtrl() {
    this.aboutThings = [
      {
        name: 'thing one',
        description: 'description one'
      },
      {
        name: 'thing two',
        description: 'description two'
      },
      {
        name: 'thing three',
        description: 'description three'
      }
    ];
  }

  angular.module('speechSynthesis')
    .controller('AboutCtrl', AboutCtrl);
})();
