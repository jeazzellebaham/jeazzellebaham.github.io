/// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// _.identity(4)=== 4 ;

_.identity = function identity (value) {
  return value;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, value){
  for (var i = 0; i < arr.length; i++){
    if (value != arr[i]) {
      return 1;
    }
    else if (value != i) {
      return -1
    }
  }
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

var arr = [1, 2, 3]
_.contains = function (arr, value){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === value) {
      return true;
    }
  }
  return false
}

console.log(result);
var result = _.contains([arr, 2, 4]);

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array (it should be), call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (arr, func){
  for(var i = 0; i < arr.length; i++){
    func(arr[i], i, arr);
  }
}

/**                       _.filter
Arguments:
   1) An array
   2) A function
 Objectives:
   1) call <function> for each element in <array> passing the arguments:
      the element, it's index, <array>
   2) return a new array of elements for which calling <function> returned true
 Edge Cases:
   1) What if <function> returns something other than true or false?
 Examples:
   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 Challenge:
   use _.each in your implementation
*/

_.filter = function (arr, func) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    func(arr[i], i, arr);
    if (func(arr[i], i, arr) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (arr, func) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    func(arr[i], i, arr);
    if (func(arr[i], i, arr) === false) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) if <collection> is an array (it should be), call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8] */

_.map = function(arr, modify){
    var newArray = [];
    for(var i = 0; i > arr.length; i++){
      modify(i, arr[i], arr);
      }
      newArray.push( modify(arr[i], i, arr));
      return newArray
   }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
