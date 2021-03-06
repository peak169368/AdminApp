// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'starter.services', 'starter.common'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('adminIndex', {
        url: '/',
        templateUrl: 'templates/admin-index.html',
        cache: false,
        controller:'AdminIndexCtrl'
    })
    .state('adminView', {
        url: '/',
        templateUrl: 'templates/admin-view.html',
        params: { 'admin': null },
        cache: false,
        controller: 'AdminViewCtrl'
    })
    .state('adminAdd', {
        url: '/',
        templateUrl: 'templates/admin-add.html',
        params: { 'admin': null },
        cache: false,
        controller: 'AdminAddCtrl'
    });
    $urlRouterProvider.otherwise('/');
});

angular.module('starter.controllers', []);

angular.module('starter.directives', []);

angular.module('starter.services', []);

angular.module('starter.common', []);
