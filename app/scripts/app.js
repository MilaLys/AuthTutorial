'use strict';

// Declare app level module which depends on views, and components
angular.module ( 'myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2'
] )
    .config ( [ '$locationProvider', '$routeProvider', function ( $locationProvider, $routeProvider ) {
        $locationProvider.hashPrefix ( '!' );
        $routeProvider.when ( '/view1', {
            templateUrl: 'app/views/view1.html'
        } ).when ( '/view2', {
            templateUrl: 'app/views/view2.html'
        } ).otherwise ( 'app/views/view1.html' );
    } ] )
    .controller ( 'myCtrl', function ( $scope ) {
        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        }
    } );
