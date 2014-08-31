(function() {
  'use strict';
  angular
    .module('speechSynthesis', [
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './components/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'mainCtrl'
        })
        .when('/about', {
          templateUrl: './components/about/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'aboutCtrl'
        })
        .when('/contact', {
          templateUrl: './components/contact/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'contactCtrl'
        });
    });
})();
