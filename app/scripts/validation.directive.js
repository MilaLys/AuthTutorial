'use strict'
angular
    .module ( 'myApp.contacts' )
    .directive ( 'overwrite-email', function () {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function ( scope, elem, ctrl ) {
                if ( ctrl && ctrl.$validators.email ) {
                    ctrl.$validators.email = function ( modelValue ) {
                        return ctrl.$isEmpty ( modelValue ) || EMAIL_REGEXP.test ( modelValue );
                    }
                }
            }
        }
    } )

    .directive ( 'integer', function () {
        var INTEGER_REGEXP = /^\-?\d+$/;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ( scope, elem, attr, ctrl ) {
                ctrl.$validators.integer = function ( modelValue ) {
                    if ( ctrl.$isEmpty ( modelValue ) ) {
                        return true;
                    }

                    if ( INTEGER_REGEXP.test ( modelValue ) ) {
                        return true;
                    }

                    return false;
                }
            }
        }
    } );