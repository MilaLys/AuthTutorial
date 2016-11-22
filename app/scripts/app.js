'use strict';

// Declare app level module which depends on views, and components
angular.module ( 'myApp', [
    'restangular',
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
    .controller ( 'myCtrl', function ( $scope, $http, Restangular ) {
        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };
        $scope.change = function () {
            console.log ( 'We have a change!' );
        };

        /*
         CONFIRM PASSWORD
         */
        $scope.password = '';
        $scope.confirmPassword = function ( confirmPassword, password ) {
            if ( confirmPassword != password ) {
                return true;
            }
            return false;
        };

        /*
         SIGN IN
         */
        $scope.data = {
            name: '',
            password: ''
        };
        $scope.submit = function () {
            $http ( {
                method: 'POST',
                url: '/authorization.php',
                data: $scope.data
            } ).success ( function ( response ) {
                if ( response == 'OK' ) {
                    alert ( 'You sign in successfully.' );
                } else {
                    alert ( 'The following error has appeared: \n' + response );
                }
                $scope.data = {};
            } );
        };

        /*
         LOG IN
         */
        $scope.loggedin = isUserLogged;
        console.log($scope.loggedin);
        $scope.login = {
            uName: '',
            uPassword: ''
        };
        /*$scope.login = function () {
         var data = {
         username: $scope.data.uName,
         password: $scope.data.uPassword
         };
         $http ( {
         method: 'POST',
         url: '/login.php',
         data: data
         } ).success ( function ( response ) {
         if ( response == 'OK' ) {
         alert ( 'You log in successfully.' );
         var user = angular.element ( document.querySelector ( ".log-in" ) );
         $scope.modalShown = false;
         $scope.loggedin = true;
         } else {
         alert ( 'The following error has appeared: \n' + response );
         }
         } ).then ( function () {
         $scope.data = {};
         } );
         };*/

        $scope.login = function () {
            var data = {
                username: $scope.data.uName,
                password: $scope.data.uPassword
            };
            var users = Restangular.all ( '/login.php' );

            users
                .post ( data )
                .then ( function ( response ) {
                    if ( response == 'OK' ) {
                        alert ( 'You log in successfully.' );
                        $scope.modalShown = false;
                        $scope.loggedin = true;
                        $scope.data = {};
                    }
                }, function ( response ) {
                    if ( response != 'OK' ) {
                        alert ( 'The following error has appeared: \n' + response );
                    }
                    alert ( 'The following error has appeared: \n' + response );
                } );
        };
        
        /*
         SIGN OUT
         */
        $scope.logout = function () {
            $scope.loggedin = false;
        }
    } );
