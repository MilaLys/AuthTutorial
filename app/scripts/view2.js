'use strict';

angular.module( 'myApp.view2', [ 'ngRoute' ] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/view2', {
            templateUrl: 'app/views/view2.html',
            controller: 'View2Ctrl'
        } );
    } ] )

    .controller( 'View2Ctrl',  function ($scope, $http, $templateCache) {
        $scope.data = {
            name: '',
            email: '',
            phone: '',
            msg: ''
        };
        $scope.submit = function () {
            $http({
                method: 'POST',
                url: '/request.php',
                data: $scope.data
            }).success(function(response){
                if(response == 'OK'){
                    alert('Your request has been received.');
                }else{
                    alert('The following error has appeared: \n' + response);
                }
                $scope.data = {};
            });
        }
    }  );