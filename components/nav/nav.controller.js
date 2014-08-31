(function() {
  'use strict';

  function NavCtrl() {
    this.navLinks = [
      {
        name: 'Home',
        url: '#/'
      },
      {
        name: 'About',
        url: '#/about'
      },
      {
        name: 'Contact',
        url: '#/contact'
      }
    ];

  }

  angular.module('speechSynthesis')
    .controller('NavCtrl', NavCtrl);
})();
