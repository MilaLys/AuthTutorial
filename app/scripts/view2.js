'use strict';

angular.module( 'myApp.view2', [ 'ngRoute' ] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/view2', {
            templateUrl: 'app/views/view2.html',
            controller: 'View2Ctrl'
        } );
    } ] )

    .controller( 'View2Ctrl',  function ($scope, $http) {
        $scope.data = {
            name: '',
            email: '',
            phone: '',
            msg: ''
        };
        $scope.submit = function () {
            console.log($scope.data);
            $http({
                method: 'POST',
                url: '/request.php',
                data: $scope.data
            }).success(function(response){
                if(response == 'OK'){
                    console.log('Your request has been received.');
                }else{
                    console.log('The following error has appeared: \n' + response);
                }
            });
        }
    }  );