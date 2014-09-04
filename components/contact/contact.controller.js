(function() {
  'use strict';

  function ContactCtrl() {
    this.contactThings = [
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

  angular.module('speechSynthesis').
    controller('ContactCtrl', ContactCtrl);
})();
