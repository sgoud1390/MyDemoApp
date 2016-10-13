/**
@description: Handling Custom Exceptions.
* Question: In angular, whenever there is an angular exception, I want to print the following message 
* before the exception: “There has been an error: the error is:” and the following message after the exception: “Please call helpdesk”.
*/

'use strict';

/* AngularJS has its own exception handler. 
*  You can override it with a Decorator that helps you to extend the functionality of an object in AngularJS.
*/

angular.module('appToHandleExceptions')
  .config(function($provide) {
    $provide.decorator('$exceptionHandler', ['$log', '$delegate',
      function($log, $delegate) {
        return function(exception, cause) {
          $log.debug('There has been an error: the error is: ');
          $delegate(exception, cause);
          $log.info('Please call helpdesk');
        };
      }
    ]);
  });
