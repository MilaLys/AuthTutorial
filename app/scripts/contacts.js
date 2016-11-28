'use strict';

angular.module ( 'myApp.contacts', [
    'ui.router',
    'restangular'
] )

    .controller ( 'View2Ctrl', function ( $scope, $http, Restangular ) {
        $scope.data = {
            name: '',
            email: '',
            phone: '',
            msg: ''
        };
        /*$scope.submit = function () {
         $http ( {
         method: 'POST',
         url: '/request.php',
         data: $scope.data
         } ).success ( function ( response ) {
         if ( response == 'OK' ) {
         alert ( 'Your request has been received.' );
         } else {
         alert ( 'The following error has appeared: \n' + response );
         }
         $scope.data = {};
         } );
         }*/

        // First way of creating a Restangular object. Just saying the base URL
        $scope.submit = function () {
            var baseRequests = Restangular.all ( '/request.php' );

            baseRequests
                .post ( $scope.data )
                .then ( function () {
                    alert ( 'Your request has been received.' );
                    $scope.data = {};
                    console.log ( $scope.allUsers );
                }, function () {
                    console.log ( 'Sth went wrong!' );
                } );

        }
    } );