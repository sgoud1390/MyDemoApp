/**
* @description: Function to print 3,4,5 by not using loops
* The slice() method returns a shallow copy of an array into the new array object (a portion).
* The parameters for slice() method are indexes. Returns a new array containing the extracted elements.
*/

'use strict';

function myFunction(){
		var args = Array.prototype.slice.call(arguments);
    if (args.length < 5){
      alert("Please provide enough arguments");
    } else{
    	alert(args.slice(2,5));
    }
}
myFunction(1,2,3,4,5,6,7,8,9);
