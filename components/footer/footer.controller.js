(function() {
  'use strict';

  function FooterCtrl() {
    this.currentYear = new Date().getFullYear();
  }
  angular.module('speechSynthesis').
    controller('FooterCtrl', FooterCtrl);
})();
