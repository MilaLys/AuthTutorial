'use strict'
angular
    .module ( 'myApp' )
    .directive ( 'modal', function ( $document ) {
        return {
            restrict: 'A',
            link: function ( scope, elem, attr ) {
                elem.on ( 'click', function ( event ) {
                    var target = event.target;
                    var modalWindow = angular.element ( document.querySelector ( ".modal-window" ) );
                    if ( target == 'DIV' ) {
                        modalWindow.addClass ( 'visible' );
                    }
                    return true;
                } )
            }
        }
    } );