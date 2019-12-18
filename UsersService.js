(function() {
'use strict';

/**
 * Users Service
 */
angular
  .module('myapp')
  .factory('UsersService', service);

function service(){
  var get = function() {
    return [{
      username: 'Sravan',
      roles: ['WIPRO']
    }, {
      username: 'Sumangth',
      roles: ['IBM']
    }, {
      username: 'Deepak',
      roles: ['SBI']
    },{
      username: 'Srikanth',
      roles: ['TCS']
    }];
  }

  return {
    get: get
  }
}

})();