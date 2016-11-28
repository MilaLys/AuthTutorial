'use strict';

// Declare app level module which depends on views, and components
angular.module ( 'myApp', [
    'ui.router',
    'restangular',
    'ngRoute',
    'myApp.about',
    'myApp.blog',
    'myApp.contacts'

] )
    .config ( function ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise ( "/about" );
        $stateProvider
            .state ( 'about', {
                url: "/about",
                templateUrl: "app/views/about.html",
                controller: 'AboutCtrl'
            } )
            .state ( 'blog', {
                url: "/blog",
                templateUrl: "app/views/blog.html",
                controller: 'BlogCtrl'
            } )
            .state ( 'contacts', {
                url: "/contacts",
                templateUrl: "app/views/contacts.html",
                controller: 'View2Ctrl'
            } );
    } )
    
    .controller ( 'myCtrl', function ( $scope, $http, Restangular ) {

        /**
         * LoggedIn Status
         * @type {boolean}
         */
        $scope.loggedin = false;

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
        /*$scope.loggedin = isUserLogged || false;
         $scope.login = {
         uName: '',
         uPassword: ''
         };*/
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
                        //$scope.loggedin = true;
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
            var users = Restangular.all ( '/logout.php' );
            users
                .post ()
                .then ( function () {
                    $scope.loggedin = false;
                    //isUserLogged = false;
                    alert ( 'You log out successfully.' );
                } );
        }
    } );
