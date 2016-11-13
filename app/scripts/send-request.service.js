'use strict'
angular
    .module( 'myApp.view2' )
    .service( 'SendRequest', function ( $http, $q ) {
        var deferred = $q.defer();
        $http( {
            method: 'GET',
            url: '/request.php',
            data: {
                name: 'My name'
            }
        } ).then( function () {
            deferred.resolve();
        } ),
            function () {
                deferred.reject();
            };
        return deferred.promise;
    } );