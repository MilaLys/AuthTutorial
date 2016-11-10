'use strict';

angular.module ( 'myApp.view2', [ 'ngRoute' ] )

    .config ( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when ( '/view2', {
            templateUrl: 'app/views/view2.html',
            controller: 'View2Ctrl'
        } );
    } ] )

    .controller ( 'View2Ctrl', [ function () {
        $scope.name = '';
        $scope.email = '';
        $scope.phone = '';
        $scope.msg = '';
        $scope.submit = function () {
            $scope.name = '';
            $scope.email = '';
            $scope.phone = '';
            $scope.msg = '';
        }
    } ] );